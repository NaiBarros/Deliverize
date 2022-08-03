import "../styles/header.css";

import logo from "../assets/images/logo.png";
import arrow from "../assets/icons/arrow.svg";
import cart from "../assets/icons/cart.svg";
import user from "../assets/icons/user.svg";

import { useState } from "react";

export default function Header() {
  const [address, setAddress] = useState("");

  console.log(address);

  return (
    <header className="header">
      <div>
        <img src={logo} alt="Logo" />
        <div>
          <div className="select">
            <span>Entrega:</span>
            <select
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            >
              <option>R. Antônio Braune, 222</option>
              <option>R. Antônio Braune, 223</option>
              <option>R. Antônio Braune, 224</option>
            </select>
            <img src={arrow} alt="Arrow down" />
          </div>
          <input
            type="text"
            placeholder="Busque por estabelecimento ou produtos"
          />
          <a>
            <img src={user} alt="User" />
            <span>Entrar</span>
          </a>
          <a>
            <img src={cart} alt="Cart" />
            <span>Carrinho</span>
            <div>
              <small>1</small>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
