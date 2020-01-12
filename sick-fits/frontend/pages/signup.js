import Signup from '../components/Signup';
import Signin from '../components/Signin';
import RequestReset from '../components/RequestReset';

import styled from 'styled-components';

const Colums = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  grid-gap: 20px;
`;

const SignupPage = props => (
  <Colums>
    <Signup />
    <Signin />
    <RequestReset />
  </Colums>
);

export default SignupPage;
