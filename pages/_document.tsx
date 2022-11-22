import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="description" content="学校の出席管理アプリ" />
        <meta property="og:url" content="https://app.shusseki-kun.com" />
        <meta property="og:title" content="出席くん" />
        <meta property="og:description" content="学校の出席管理アプリ" />
        <meta
          property="og:image"
          content="https://app.shusseki-kun.com/img/logo.png"
        />
        <meta property="og:site_name" content="出席くん" />
        <meta property="og:locale" content="ja_JP" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
