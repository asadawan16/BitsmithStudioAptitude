import "@/styles/footer.css";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <span className="footer-span">
          Join us for AI Startup School this June 16-17 in San Francisco!
        </span>
        <ul className="flex justify-center gap-3">
          <li>
            <Link className="footer-link" href="">
              Guidelines
            </Link>
          </li>
          <li>
            <Link className="footer-link" href="">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="footer-link" href="">
              Lists
            </Link>
          </li>
          <li>
            <Link className="footer-link" href="">
              Api
            </Link>
          </li>
          <li>
            <Link className="footer-link" href="">
              Security
            </Link>
          </li>
          <li>
            <Link className="footer-link" href="">
              Legal
            </Link>
          </li>
          <li>
            <Link className="footer-link" href="">
              Apply to YC
            </Link>
          </li>
          <li>
            <Link className="footer-link" href="">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-center pt-4 gap-2 items-center">
          <label htmlFor="search" className="text-sm font-roboto text-gray-600">
            Search :
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className="border-2 border-gray-300"
          />
        </div>
      </footer>
    </>
  );
}
