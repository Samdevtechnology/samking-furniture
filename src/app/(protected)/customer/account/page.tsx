import { PencilIcon } from "@heroicons/react/24/solid";
import MainLayout from "../../components/Main";
import CardContainer from "../../components/CardContainer";
import { Card, Content, Footer, Header } from "../../components/Card";

const page = () => {
  return (
    <MainLayout title="Account Overview">
      <CardContainer>
        <Card>
          <Header icon={<PencilIcon />}>Account Details</Header>
          <Content title="Cherry Che">
            <>
              <p>cherryche@gmail.com</p>
              <p>0905632714</p>
            </>
          </Content>
          <Footer href="#">Change Password</Footer>
        </Card>

        <Card>
          <Header>Address Book</Header>
          <Content title="Your default shipping address:">
            <>
              <p>Tosin Mustapha.</p>
              <p>23, kunle debayo. Abuja-Wuye, Federal Capital Territory</p>
              <p>+234 9080076547</p>
            </>
          </Content>
          <Footer href="#">Add New Address</Footer>
        </Card>

        <Card>
          <Header>Newsletter Preference</Header>
          <Content
            title="You are currently subscribed to 
            following newsletters:"
          >
            <ul className="list-disc list-inside">
              <li>daily newsletters</li>
              <li>weekly newsletters</li>
            </ul>
          </Content>
        </Card>
      </CardContainer>
    </MainLayout>
  );
};

export default page;
