import Navbar from "app/components/Navbar/Navbar";
import Product from "app/components/Product/Product";
import ProductsGrid from "app/components/Product/ProductsGrid";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <div className={styles.productsGridWrapper}>
          <ProductsGrid>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ProductsGrid>
        </div>
      </main>
    </div>
  );
}
