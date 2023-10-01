import Link from "next/link";
import MainLayout from "../../components/Main";

const page = () => {
  return (
    <MainLayout title="Orders">
      <header className=" pt-4 px-6">
        <div className="flex rounded-t py-3 px-4 shadow">
          <ul className="flex gap-x-8 text-lg text-primary">
            <li>
              <Link
                href={"#"}
                className="hover:decoration-1 hover:underline underline-offset-2"
              >
                Active Orders
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:decoration-1 hover:underline underline-offset-2"
              >
                Close Orders
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </MainLayout>
  );
};

export default page;
