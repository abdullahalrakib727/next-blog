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

const getPostData = (fileName: string) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension

  const postData: PostData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  return allPosts;
};

export const getFeaturePosts = () => {
  const allPosts = getAllPosts();

  const featurePosts = allPosts.filter((post) => post.isFeatured);

  return featurePosts;
};
