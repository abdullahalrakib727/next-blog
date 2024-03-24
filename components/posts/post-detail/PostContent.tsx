import { PostDetailProps } from "@/pages/posts/[slug]";
import PostHeader from "./PostHeader";
import classes from "./post-content.module.css";
import Markdown from "react-markdown";
import Image from "next/image";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
          code: ({ node, children, className }) => {
            const childrenArray = Array.isArray(children)
              ? children
              : [children];
            const codeLanguage = className?.split("-")[1];
            return (
              <SyntaxHighlighter
                style={nightOwl}
                language={codeLanguage ? codeLanguage : ""}
              >
                {childrenArray}
              </SyntaxHighlighter>
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
