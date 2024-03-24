import { PostDetailProps } from "@/pages/posts/[slug]";
import PostHeader from "./PostHeader";
import classes from "./post-content.module.css";
import Markdown from "react-markdown";
import Image from "next/image";

const PostContent = ({ post }: PostDetailProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <Markdown
        components={{
          img: ({ node, ...props }) => {
            const { src, alt } = props;
            return (
              <Image
                src={src || ""}
                layout="responsive"
                width={600}
                height={300}
                alt={alt || ""}
              />
            );
          },
        }}
      >
        {post.content}
      </Markdown>
    </article>
  );
};

export default PostContent;
