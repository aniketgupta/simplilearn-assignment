import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";


const Home = () => {
  let history = useHistory();
  const { getUser, user } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  const changePage = (pageName) => {
    history.push({
      pathname: pageName,
    });
  };

  return (
    <div className="app-container" >
      <h3>Name : {user && user.name}</h3>
      <h3>Email : {user && user.email}</h3>
    </div>
  );
};

export default Home;
