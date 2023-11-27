import React from "react";
import "../css/styles.css";
import Image from "next/image";
import Link from "next/link";

function Iniciar() {
  return (
    <div>
      <div className="img_fundo">
        <Image
          className="fundo"
          src="/img/fundo.jpg"
          alt="falha ao carregar imagem"
          width="1000"
          height="1000"
        />

        <div className="div_logo">
          <Image
            className="logo"
            src="/img/logo.png"
            alt="falha ao carregar imagem"
            width="1000"
            height="1000"
          />
        </div>

        <div className="divBotao">
          <Link href="/paginaserach">
            <button className="botao">Iniciar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Iniciar;
