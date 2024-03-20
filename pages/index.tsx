import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import Head from "next/head";

const HomePage = () => {
  const DUMMY_POST = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework that allows you to build static and dynamic websites. In this post, you will learn how to get started with NextJS.",
      date: "2022-02-10",
    },
    {
      slug: "react-vs-angular",
      title: "React vs Angular",
      image: "getting-started-nextjs.png",
      excerpt:
        "React and Angular are two popular frontend frameworks. In this post, you will learn the key differences between React and Angular.",
      date: "2022-02-11",
    },
    {
      slug: "state-management-in-react",
      title: "State Management in React",
      image: "getting-started-nextjs.png",
      excerpt:
        "State management is a critical aspect of building React applications. In this post, you will learn about the different state management solutions in React.",
      date: "2022-02-12",
    },
  ];

  return (
    <main>
      <Head>
        <meta
          name="description"
          content="I am Rakib. I blog about web development - especially frontend frameworks like React"
          key={"home-page-meta"}
        />
        <title>Next Blog</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={DUMMY_POST} />
    </main>
  );
};

export default HomePage;
