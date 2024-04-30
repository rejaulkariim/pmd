import { Button } from "antd";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const user = false;
  return (
    <header className="border-b border-border h-14 flex items-center">
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center">
          <div>
            <Link href="/" className="font-bold text-white">
              Hippo
            </Link>
          </div>
          <div>
            {user ? (
              <Link href="/dashboard">Dashboard </Link>
            ) : (
              <Link href="/login">
                <Button
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#191918",
                    color: "#b5b3ad",
                  }}
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
