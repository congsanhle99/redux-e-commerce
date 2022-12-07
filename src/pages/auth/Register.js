import React from "react";
import { Link } from "react-router-dom";
import registerImg from "../../assets/eshop-images/register.png";
import Card from "../../components/card/Card";
import styles from "./auth.module.scss";

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form action="">
            <input required type="email" placeholder="Email" />
            <input required type="password" placeholder="Password" />
            <input required type="password" placeholder="Confirm Password" />
            <button className="--btn --btn-primary --btn-block">Register</button>
            <span className={styles.register}>
              <p>Already account?</p>
              <Link to="/login">Login</Link>
            </span>
          </form>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={registerImg} alt="registerImg" width="400" />
      </div>
    </section>
  );
};

export default Register;
