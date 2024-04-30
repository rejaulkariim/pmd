import LoginForm from "@/components/form/LoginForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const LoginPage = () => {
  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <LoginForm />
      </MaxWidthWrapper>
    </section>
  );
};

export default LoginPage;
