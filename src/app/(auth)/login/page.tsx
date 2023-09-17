import SubNav from "@/components/SubNav";
import Container from "@/utils/Container";
import LoginForm from "./components/Form";

const Page = () => {
  return (
    <>
      <SubNav relative variant="secondary" />
      <section className="py-12">
        <Container className="flex just-cont">
          <main className="flex flex-col just-cont w-11/12 max-w-lg">
            <header className="mb-6">
              <h3 className="text-4xl">Login</h3>
            </header>
            <div className="w-full">
              <LoginForm />
            </div>
          </main>
        </Container>
      </section>
    </>
  );
};

export default Page;
