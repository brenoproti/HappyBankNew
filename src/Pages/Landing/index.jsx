import LogoImg from "../../images/logo.png";
import LandingImg from "../../images/landing.svg";
import { Link } from "react-router-dom";
import "./styles.css";

import { BiLogInCircle, BiEdit } from "react-icons/bi";

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="page-landing-content container">
        <div className="logo-container">
          <Link to="/deposit">
            <img src={LogoImg} alt="" />
          </Link>
          <h2>Sua felicidade começa aqui</h2>
        </div>

        <img src={LandingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <Link to="/login" className="login">
            <BiLogInCircle />
            Login
          </Link>

          <Link to="/createaccount" className="create-account">
            <BiEdit />
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
}
