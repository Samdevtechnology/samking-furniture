import CardContainer from "../../components/CardContainer";
import MainLayout from "../../components/Main";
import PasswordForm from "./components/Form";

const page = () => {
  return (
    <MainLayout title="Change Password">
      <CardContainer>
        <PasswordForm></PasswordForm>
      </CardContainer>
    </MainLayout>
  );
};

export default page;
