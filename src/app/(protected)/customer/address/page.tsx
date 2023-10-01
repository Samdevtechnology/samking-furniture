import CardContainer from "../../components/CardContainer";
import MainLayout from "../../components/Main";
import { Card, Content, Footer, Header } from "../../components/Card";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const page = () => {
  return (
    <MainLayout title="Address Book" link="Add New Address" href="#">
      <CardContainer>
        <Card>
          <Content title="Tosin Mustapha">
            <>
              <p>56, Tafawa Balewa. Abuja-Wuye, Federal Capital Territory</p>
              <p>+234 9080076547</p>
            </>
          </Content>
          <Footer
            sub={
              <div className="text-sm">
                <Link href={"#"}>Edit</Link>
              </div>
            }
          >
            Default Address
          </Footer>
        </Card>

        <Card>
          <Content title="Tosin Mustapha">
            <>
              <p>56, Tafawa Balewa. Abuja-Wuye, Federal Capital Territory</p>
              <p>+234 9080076547</p>
            </>
          </Content>
          <Footer
            href="#"
            sub={
              <div className="flex gap-x-4 text-sm">
                <Link href={"#"}>Edit</Link>
                <Link href={"#"}>Delete</Link>
              </div>
            }
          >
            Set As Default
          </Footer>
        </Card>
      </CardContainer>
    </MainLayout>
  );
};

export default page;
