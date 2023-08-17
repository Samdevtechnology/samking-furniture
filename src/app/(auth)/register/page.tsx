import { FacebookSolid, Google } from "@/assets/icons/Socials";
import Divider from "@/components/Divider";
import SubNav from "@/components/SubNav";
import Container from "@/utils/Container";
import CUSTOM_BTN_CONFIG from "@/utils/BUTTON_CONFIG";
import { Button } from "@/utils/MuiServerComponent";
import TextLinkWrap from "@/utils/TextLinkWrap";
import Form from "./components/Form";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Page = async () => {
  const data = await getServerSession(authOptions);
  if (data) redirect("/customer/account");

  return (
    <>
      <SubNav relative variant="secondary" />
      <section className="py-12">
        <Container className="flex just-cont">
          <main className="flex flex-col just-cont w-11/12 max-w-lg">
            <header className="mb-6">
              <h3 className="text-4xl">Create Account</h3>
            </header>
            <div className="w-full">
              <Form />
              <Divider>OR</Divider>
              <div>
                <div className="flex justify-between items-center gap-x-8">
                  <Button
                    className={`rounded-md text-base flex just-cont ${CUSTOM_BTN_CONFIG(
                      "facebook"
                    )}`}
                    fullWidth
                  >
                    <FacebookSolid
                      color="white"
                      className="inline w-5 h-5 mr-3"
                    />
                    Facebook
                  </Button>
                  <Button
                    className={`rounded-md text-base flex just-cont ${CUSTOM_BTN_CONFIG(
                      "googleBlue"
                    )}`}
                    fullWidth
                  >
                    <Google className="inline w-5 h-5 mr-3" />
                    Google
                  </Button>
                </div>
                <div>
                  <h6 className="mt-4">
                    Already have an account ? &nbsp;
                    <TextLinkWrap href="/login" className="font-medium">
                      Login
                    </TextLinkWrap>
                  </h6>
                </div>
              </div>
            </div>
          </main>
        </Container>
      </section>
    </>
  );
};

export default Page;
