import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="my-4">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <p className="text-foreground">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>

          <Link
            href="https://github.com/rejaulkariim/pmd"
            target="_blank"
            className="bg-transparent hover:bg-card p-2 rounded-md"
          >
            <FaGithub />
          </Link>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
