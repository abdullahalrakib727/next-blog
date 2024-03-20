import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

type PostItemProps = {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
};

const PostItem = ({ title, image, excerpt, date, slug }: PostItemProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href="/" passHref>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
