import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Inicio from "../components/Home";
import Layout from "../components/Layput";
import axios from "axios";
import {useRouter} from "next/router";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Inicio</title>
      </Head>
      <Inicio />
      {products.map((product: any) => (
        <div
          className="bg-fuchsia-400 border hover:border-blue-900 shadow-md text-gray-100 py-4 px-4 mx-4"
          key={product.id}
          onClick={() => router.push(`/product/${product.id}`)}
        >
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/products");
  console.log(data);
  return {
    props: {
      products: data,
    },
  };
};
