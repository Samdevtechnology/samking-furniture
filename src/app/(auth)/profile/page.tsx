import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const data = await getServerSession(authOptions);
  if (data?.user?.role === "USER") redirect("/customer/account");
  if (data?.user?.role === "ADMIN") redirect("/admin/account");
  redirect("/login");
};

export default page;
