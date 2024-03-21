import { PostsProps } from "../home-page/FeaturedPosts";
import PostGrid from "./PostGrid";
import classes from "./all-posts.module.css";

const AllPosts = ({ posts }: PostsProps) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
