
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

import Unauthorized from '../pages/unauthorized';

const withAuth = (Component) => {
  const Auth = (props) => {
    
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated)
        return <Unauthorized/>;

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
