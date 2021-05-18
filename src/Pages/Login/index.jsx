import "./styles.css";

import DrawImage from "../../images/draw.png";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div id="login">
      <div id="form-side">
        <h1 id="welcome">Bem vindo!</h1>
        <form action="">
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <Link to="/createaccount" id="link">
            Criar conta
          </Link>

          <button>Login</button>
        </form>
      </div>
      <div id="draw-side">
        <img className="draw" src={DrawImage} alt="Draw" />
        <Link to="/" class="back-link">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
      </div>
    </div>
  );
}
