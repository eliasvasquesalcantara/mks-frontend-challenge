import Navbar from "app/components/Navbar/Navbar";
import Product from "app/components/Product/Product";
import ProductsGrid from "app/components/Product/ProductsGrid";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "app/components/Footer/Footer";
import ShoppingCart from "app/components/ShoppingCart/ShoppingCart";
import ShoppingCartContext from "app/context/shoppingCart";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [renderedInBrowser, setRenderedInBrowser] = useState(false);

  useEffect(() => {
    setRenderedInBrowser(true);
  }, []);

  if (!renderedInBrowser) return null;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ShoppingCartContext.Provider
          value={{
            open: isOpen,
            setOpen: setIsOpen,
          }}
        >
          <ShoppingCart />
        </ShoppingCartContext.Provider>

        <ShoppingCartContext.Provider
          value={{
            open: isOpen,
            setOpen: setIsOpen,
          }}
        >
          <Navbar />
        </ShoppingCartContext.Provider>

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
