import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="my-4">
      <MaxWidthWrapper>
        <div className="flex justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>

          <Link
            href="https://github.com/rejaulkariim/pmd"
            target="_blank"
            className="bg-gray-800 p-2 rounded-md"
          >
            <FaGithub />
          </Link>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
