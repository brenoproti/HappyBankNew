import "./styles.css";
import LogoImg from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function TerminalDeposit() {
  return (
    <div id="deposit">
      <div className="main-side">
        <h1>Depósito</h1>

        <form action="">
          <div>
            <input type="text" placeholder="Agência" />
            <input type="text" placeholder="Conta" />
          </div>

          <input type="number" placeholder="Valor" />
        </form>

        <button>Prosseguir</button>
      </div>

      <div className="image-side">
        <Link to="/">
          <img src={LogoImg} id="logo" alt="" />
        </Link>
        <h2>Com Happy Bank é muito fácil fazer um depósito</h2>
      </div>
    </div>
  );
}
