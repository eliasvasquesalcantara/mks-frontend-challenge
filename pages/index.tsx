import Navbar from "app/components/Navbar/Navbar";
import Product from "app/components/Product/Product";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <Product />
      </main>
    </div>
  );
}
