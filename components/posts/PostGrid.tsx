import PostItem from "./PostItem";
import classes from "./post-grid.module.css";

const PostGrid = ({ posts }) => {
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
