import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

type PostData = {
  slug: string;
  title?: string;
  image?: string;
  excerpt?: string;
  date?: string;
  content?: string;
  isFeatured?: boolean;
};

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (fileName: string) => {
  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: PostData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  return allPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featurePosts = allPosts.filter((post) => post.isFeatured);

  return featurePosts;
};
