import Link from "next/link";
import "@/styles/header.css";
export default function Header() {
  return (
    <>
      <header className="header">
        <Link href="/" className=" mr-14">
          Next Level Food
        </Link>
        <nav>
          <ul className="nav">
            <li>
              <Link href={"/meals"} className="nav-link">
                Browse Meals
              </Link>
            </li>
            <li>
              <Link href="/community" className="nav-link">
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
