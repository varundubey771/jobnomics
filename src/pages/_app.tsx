"use client"
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Roboto } from "next/font/google";
import "tw-elements/dist/css/tw-elements.min.css";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
  <>      <style jsx global>{`
  html {
    font-family: ${roboto.style.fontFamily};
  }
`}</style> <Component {...pageProps} /></>
)}

export default api.withTRPC(MyApp);
