import React from "react";
import { Link } from "react-router-dom";
import forgotImg from "../../assets/eshop-images/forgot.png";
import Card from "../../components/card/Card";
import styles from "./auth.module.scss";

const Reset = () => {
  return (
    <>
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={forgotImg} alt="loginImg" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Reset Password</h2>
            <form action="">
              <input required type="email" placeholder="Email" />
              <button className="--btn --btn-primary --btn-block">Reset Password</button>
              <div className={styles.links}>
                <p>
                  <Link to="/login">Login -</Link>
                </p>
                <p>
                  <Link to="/register">- Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Reset;
