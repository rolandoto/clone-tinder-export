import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import   AuthProvider   from "../Auth/Auth";


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthProvider);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/Login"} />
        )
      }
    />
  );
};

export default PrivateRoute