import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="pagina1?name=Cacique&tia=1234"> Página 1 </Link>
        </li>
        <li>
          <Link href="pagina2"> Página 2 </Link>
        </li>
      </ul>
    </nav>
  );
}
