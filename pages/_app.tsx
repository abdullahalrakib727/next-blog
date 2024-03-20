import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Abdullah Al Rakib"></meta>
        <meta
          name="description"
          content="Next Blog is a blog website that is built with NextJS by Abdullah Al Rakib. It is a blog about web development - especially frontend frameworks like React."
          key={"about-next-blog-meta"}
        />
        <title>Next Blog</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
