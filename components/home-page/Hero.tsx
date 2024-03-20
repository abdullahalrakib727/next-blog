import Image from "next/image";
import Classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={Classes.hero}>
      <div className={Classes.image}>
        <Image src="/images/site/rakib.jpg" alt="An image showing Rakib" width={800} height={800} />
         </div>
      <h1>Hi, I&apos;m Rakib</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
};

export default Hero;
