import CardContainer from "../../components/CardContainer";
import MainLayout from "../../components/Main";
import Form from "./components/Form";

const page = () => {
  return (
    <MainLayout title="Newsletter">
      <CardContainer>
        <div>
          <h5>SUBSCRIBE TO</h5>

          <Form />
        </div>
      </CardContainer>
    </MainLayout>
  );
};

export default page;
