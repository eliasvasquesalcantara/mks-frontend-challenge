import Navbar from "app/components/Navbar/Navbar";
import Product from "app/components/Product/Product";
import ProductsGrid from "app/components/Product/ProductsGrid";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "app/components/Footer/Footer";
import ShoppingCart from "app/components/ShoppingCart/ShoppingCart";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ShoppingCart />
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

        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </main>
    </div>
  );
}
