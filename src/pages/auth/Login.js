import React from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/eshop-images/login.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="loginImg" width="400" />
      </div>
      <div className={styles.form}>
        <h2>Login</h2>
        <form action="">
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button className="--btn --btn-primary --btn-block">Login</button>
          <div className={styles.links}>
            <Link to="/reset">Reset Password</Link>
          </div>
          <p>-- or --</p>
        </form>
        <button className="--btn --btn-danger --btn-block">
          <FaGoogle color="#fff" /> Login With Google
        </button>
        <span className={styles.register}>
          <p>Don't have account?</p>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
