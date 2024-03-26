import { PostsProps } from "@/components/home-page/FeaturedPosts";
import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/lib/posts-util";
import { GetStaticProps } from "next";
import Head from "next/head";

const AllPostPage = ({ posts }: PostsProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="all blogs that have been posted on Next Blog"
        />
        <title>All Posts | Next Blog</title>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export default AllPostPage;

export const getStaticProps: GetStaticProps = (ctx) => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
};
