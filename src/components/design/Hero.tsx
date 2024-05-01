import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Hero = () => {
  return (
    <section className="my-10 ">
      <MaxWidthWrapper>
        <div className="flex flex-col justify-center text-center space-y-3 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Manage Task with Ease
          </h1>
          <p className="text-foreground">
            Keep your team in sync with real-time updates and centralized
            project discussions.
          </p>

          <Image
            src="/assets/image.png"
            height={500}
            width={1280}
            alt="image"
            className="object-contain border-4 rounded-xl border-border "
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
