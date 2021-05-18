import "./styles.css";
import DrawCreate from "../../images/heroCreate.png";
import LogoImg from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  return (
    <div id="wrapper">
      <main className="mainSide">
        <h1>Criar uma conta</h1>

        <form action="">
          <input type="text" id="name" placeholder="Nome completo" />
          <input type="text" id="cpf" placeholder="CPF" />
          <input type="text" id="rg" placeholder="RG" />
          <input type="text" id="email" placeholder="E-mail" />
          <input type="password" id="senha" placeholder="Senha" />
          <input
            type="password"
            id="confirmsenha"
            placeholder="Confirmar ssenha"
          />
        </form>
      </main>
      <div className="drawSide">
        <img src={DrawCreate} alt="" id="drawC" />
        <Link to="/">
          <img src={LogoImg} alt="" id="logo" />
        </Link>
      </div>
    </div>
  );
}
