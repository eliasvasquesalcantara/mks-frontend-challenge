import Navbar from "app/components/Navbar/Navbar";
import ProductsGrid from "app/components/Product/ProductsGrid";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "app/components/Footer/Footer";
import ShoppingCart from "app/components/ShoppingCart/ShoppingCart";
import ShoppingCartContext from "app/context/shoppingCart";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Product from "app/components/Product/Product";
import { IProductsParsedApiResponse } from "app/modules/product/types";
import { getProducts } from "app/modules/product/api/getProducts";
import { useDispatch } from "react-redux";
import { addProduct } from "app/redux/cartSlice";
import ProductSkeleton from "app/components/Product/ProductSkeleton";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [renderedInBrowser, setRenderedInBrowser] = useState(false);

  const query = useQuery<IProductsParsedApiResponse>("products", getProducts);

  const dispatch = useDispatch();

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
            {query.data?.products.map((product) => {
              if (query.isLoading) return <ProductSkeleton />;
              return (
                <Product
                  key={product.id}
                  {...product}
                  onBuyClick={async () => {
                    dispatch(addProduct({ product }));
                  }}
                />
              );
            })}
          </ProductsGrid>
        </div>

        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </main>
    </div>
  );
}
