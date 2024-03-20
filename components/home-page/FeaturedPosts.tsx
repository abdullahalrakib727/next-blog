import PostGrid from "../posts/PostGrid";
import classes from "./featured-posts.module.css";

export type PostsProps = {
  posts: {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    slug: string;
  }[];
};

const FeaturedPosts = ({ posts }: PostsProps) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
