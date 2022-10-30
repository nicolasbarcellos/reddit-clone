import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../../styles/globals.css";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="h-screen overflow-y-scroll bg-slate-200">
        <Header />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
