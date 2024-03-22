import { PostsProps } from "@/components/home-page/FeaturedPosts";
import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/lib/posts-util";
import { GetStaticProps } from "next";

const AllPostPage = ({ posts }: PostsProps) => {
  return <AllPosts posts={posts} />;
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
