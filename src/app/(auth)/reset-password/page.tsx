import SubNav from "@/components/SubNav";
import Container from "@/utils/Container";
import ResetForm from "./components/Form";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import TextLinkWrap from "@/utils/TextLinkWrap";

const Page = async () => {
  return (
    <>
      <SubNav relative variant="secondary" />
      <section className="py-12">
        <Container className="flex just-cont">
          <main className="flex flex-col just-cont w-11/12 max-w-lg">
            <header className="mb-8 flex just-cont flex-col">
              <h3 className="text-4xl pb-4">Password Assistance</h3>
              <span className="flex justify-center gap-x-4">
                <span>
                  <InformationCircleIcon className="w-7 h-7 text-primary" />
                </span>
                <p className="text-start text-base">
                  Please enter the e-mail address associated with your account.
                  We will send a security code to reset your password.
                </p>
              </span>
            </header>
            <div className="w-full">
              <ResetForm />
              <div className="mt-8 text-center">
                <TextLinkWrap
                  scale={false}
                  href="/login"
                  className="font-secondary font-medium text-xl"
                >
                  Return to Login
                </TextLinkWrap>
              </div>
            </div>
          </main>
        </Container>
      </section>
    </>
  );
};

export default Page;
