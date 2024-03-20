import Hero from "@/components/home-page/Hero";
import Head from "next/head";

const HomePage = () => {
  return (
    <main>
      <Head>
        <meta
          name="description"
          content="I am Rakib. I blog about web development - especially frontend frameworks like React"
        />
        <title>Next Blog</title>
      </Head>
      <Hero />
    </main>
  );
};

export default HomePage;
