import Image from "next/image";
import "../css/styles2.css";
import Link from "next/link";

export default function Search() {
  return (
    <div>
      <div className="img_logopag2">
        <Image
          id="logo"
          src="/img/logo.png"
          alt="falha ao carregar imagem"
          width={300}
          height={200}
        />
      </div>

      <div className="img_mapa">
        <Image
          id="mapa"
          src="/img/mapa.png"
          alt="falha ao carregar imagem"
          width={600}
          height={400}
        />
      </div>

      <div className="divBotao">
        <Link href="../Pagina1/page.jsx">
          <button className="botao">Mapa</button>
        </Link>
      </div>
    </div>
  );
}
