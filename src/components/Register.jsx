import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="card__header">
          <h1>Register</h1>
        </div>

        <div className="card__body">
          <form>
            <div className="form__group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form__group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="form__group">
              <label htmlFor="password2">Confirm Password</label>
              <input type="password" id="password2" />
            </div>
            <div className="form__group">
              <div className="file-image">
                <div className="image"></div>
                <div className="file">
                  <label htmlFor="file">Slect Image</label>
                  <input type="file" id="file" />
                </div>
              </div>
            </div>
            <div className="form__group">
                <   input type="submit" value={"Register"} className="btn"></input>
                </div>
                <div className="form__group">   
                <span>
                    <Link to="/messenger/Login">Login Your Account</Link>
                </span>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
