import React, { useState } from "react";
import "./Login.css";
import { FaFacebookSquare, FaTwitterSquare, FaGoodreads } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/Action/Authaction";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, navigate));
  };
  return (
    <div className="body">
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card py-3 px-2">
              <p className="text-center mb-3 mt-2">SE CONNECTER AVEC</p>
              <div className="row mx-auto ">
                <div className="col-4">
                  <FaTwitterSquare className="fab fa-twitter" />
                </div>
                <div className="col-4">
                  <FaFacebookSquare className="fab fa-facebook" />
                </div>
                <div className="col-4">
                  <FaGoodreads className="fab fa-google" />
                </div>
              </div>
              <div className="division">
                <div className="row">
                  <div className="col-3">
                    <div className="line l" />
                  </div>
                  <div className="col-6">
                    <span>OU AVEC MON EMAIL</span>
                  </div>
                  <div className="col-3">
                    <div className="line r" />
                  </div>
                </div>
              </div>
              <form className="myform">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 col-12"></div>
                  <div className="col-md-6 col-12 bn">Mot se passe oublie</div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="button"
                    className="btn btn-block btn-primary btn-lg"
                    onClick={handleLogin}
                  >
                    <small>
                      <i className="far fa-user pr-2" />
                      Se connecter
                    </small>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
