import Layout from "../../components/Layput";
import type { InferGetStaticPropsType } from "next";
import axios from "axios";

export default function Details({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="container bg violet-500 text-center text-white mt-4">
        <h1>Details</h1>
        <p>{product.name}</p>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context:any) => {
  const { data } = await axios.get("http://localhost:3000/api/products/"+ context.query.id);
  console.log(data);
  return {
    props: {
      product: data,
    },
  };
};
