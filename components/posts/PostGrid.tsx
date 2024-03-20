import { PostsProps } from "../home-page/FeaturedPosts";
import PostItem from "./PostItem";
import classes from "./posts-grid.module.css";

const PostGrid = ({ posts }: PostsProps) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          date={post.date}
          excerpt={post.excerpt}
          image={post.image}
          slug={post.slug}
          title={post.title}
        />
      ))}
    </ul>
  );
};

export default PostGrid;
