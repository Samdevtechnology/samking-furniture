import ImageTitle from "@/components/ImageTitle";
import Container from "@/utils/Container";
import Nav from "./components/Nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ImageTitle />
      <Container className="my-24">
        <div className="flex gap-x-8">
          <aside className="w-3/12">
            <Nav />
          </aside>
          <main className=" w-9/12">{children}</main>
        </div>
      </Container>
    </>
  );
};

export default layout;
