const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },

  async users(parent, args, ctx, info) {
    //1. check if user is loged
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. check if the user has the permissions to query
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSSIONUPDATE']);
    // 3 Return all users
    return ctx.db.query.users({}, info);
  },
};

module.exports = Query;
