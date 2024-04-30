import { Button } from "antd";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Hero = () => {
  return (
    <section className="my-10 ">
      <MaxWidthWrapper>
        <div className="flex flex-col text-center space-y-3 w-full">
          <h1 className="text-3xl md:text-4xl font-bold">
            Manage Task with Ease
          </h1>
          <p>
            Keep your team in sync with real-time updates and centralized
            project discussions.
          </p>

          <div className="max-w-md mx-auto">
            <Button>Get Startet</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
