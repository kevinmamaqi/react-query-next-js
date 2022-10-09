import { useGetServiceQuery } from "@company-libs/queries";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data, isError } = useGetServiceQuery();

  console.log("data", data);
  console.log("isError", isError);
  return <div>Hi</div>;
};

export default Home;
