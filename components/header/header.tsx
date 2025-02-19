import Link from "next/link";
import "@/styles/header.css";
import Image from "next/image";
import logo from "@/public/logo.svg";
export default function Header() {
  return (
    <header className="header">
      <Link href="/" className=" mr-14 flex">
        <Image
          src={logo}
          alt="logo"
          height={20}
          className="border-2 border-white "
        />
        <span className=" ml-1 block text-black  font-bold font-serif  ">
          Hacker News
        </span>
      </Link>
      <nav>
        <ul className="nav">
          <li>
            <Link href={"/meals"} className="nav-link">
              new
            </Link>
          </li>
          <li>
            <Link href="/community" className="nav-link">
              past
            </Link>
          </li>
          <li>
            <Link href="/community" className="nav-link">
              comments
            </Link>
          </li>
          <li>
            <Link href="/community" className="nav-link">
              ask
            </Link>
          </li>
          <li>
            <Link href="/community" className="nav-link">
              show
            </Link>
          </li>
          <li>
            <Link href="/community" className="nav-link">
              jobs
            </Link>
          </li>
          <li>
            <Link href="/community" className="nav-link">
              submit
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
