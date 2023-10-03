import MainLayout from "../../components/Main";
import DetailsForm from "./components/Form";

const page = () => {
  return (
    <MainLayout title="Profile Details">
      <div className="p-5">
        <DetailsForm></DetailsForm>
      </div>
    </MainLayout>
  );
};

export default page;
