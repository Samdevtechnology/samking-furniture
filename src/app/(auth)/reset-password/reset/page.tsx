"use client";
import SubNav from "@/components/SubNav";
import Container from "@/utils/Container";
import ResetForm from "./components/Form";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import useAuthContext from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import FlashingTextLoader from "@/components/FlashingTextLoader";

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
              <h3 className="text-4xl pb-4">Reset your password</h3>
              <span className="flex justify-center gap-x-4">
                <span>
                  <InformationCircleIcon className="w-7 h-7 text-primary" />
                </span>
                <p className="text-start text-base">
                  Please enter your new password.
                </p>
              </span>
            </header>
            <div className="w-full">
              <ResetForm />
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
