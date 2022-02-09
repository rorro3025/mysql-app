import Layout from "../components/Layput";
import type { NextPage } from "next";
import AddProduct from "../components/AddProduct";

const New: NextPage = () => {
  return (
    <Layout>
      <AddProduct />
    </Layout>
  );
};
export default New;
