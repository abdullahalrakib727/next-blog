import PostContent from "@/components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import { GetStaticPaths, GetStaticProps } from "next";

export type PostDetailProps = {
  post: {
    slug: string;
    title: string;
    image: string;
    date: string;
    content: string;
  };
};

const PostDetailsPage = ({ post }: PostDetailProps) => {
  return <PostContent post={post} />;
};

export default PostDetailsPage;

export const getStaticProps: GetStaticProps = (ctx) => {
  const { params } = ctx;
  const slug = params?.slug as string;

  const data = getPostData(slug);

  return {
    props: {
      post: data,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};
