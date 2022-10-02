import React from "react";
import { useNavigate } from "react-router-dom";

const CheckAuth = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return <div>{token ? navigate("/profile") : children}</div>;
};

export default CheckAuth;
