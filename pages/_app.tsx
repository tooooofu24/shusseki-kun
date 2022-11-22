import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex, useToast } from "@chakra-ui/react";
import { CustomTheme } from "../chakra/CustomTheme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>出席くん</title>
      </Head>
      <ChakraProvider theme={CustomTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

MyApp.getInitialProps = async () => ({ pageProps: {} });

export default MyApp;
