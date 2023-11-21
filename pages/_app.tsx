import "@/styles/global.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../store";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
