"use client";
import SubNav from "@/components/SubNav";
import Container from "@/utils/Container";
import ResetForm from "./components/Form";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import useAuthContext from "../../context/AuthContext";
import FlashingTextLoader from "@/components/FlashingTextLoader";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { samkingSid } = useAuthContext();

  useEffect(() => {
    if (!Boolean(samkingSid)) {
      router.replace("/login");
    }
  }, [router, samkingSid]);

  return Boolean(samkingSid) ? (
    <>
      <SubNav relative variant="secondary" />
      <section className="py-12">
        <Container className="flex just-cont">
          <main className="flex flex-col just-cont w-11/12 max-w-lg">
            <header className="mb-8 flex just-cont flex-col">
              <h3 className="text-4xl pb-4">Password Reset</h3>
              <span className="flex justify-center gap-x-4">
                <span>
                  <InformationCircleIcon className="w-7 h-7 text-primary" />
                </span>
                <p className="text-start text-base">
                  Please enter the security code sent to your email in order to
                  proceed with the password reset.
                </p>
              </span>
            </header>
            <div className="w-full">
              <ResetForm />
              <div>
                <div className="mt-6 text-sm w-11/12 mx-auto text-center text-primary">
                  <p>
                    If you need additional assistance, feel free to explore our
                    Help Center or reach out to our dedicated customer service
                    team. We&apos;re here to help!
                  </p>
                </div>
              </div>
            </div>
          </main>
        </Container>
      </section>
    </>
  ) : (
    <FlashingTextLoader message="Confirming Credentials..." />
  );
};

export default Page;
