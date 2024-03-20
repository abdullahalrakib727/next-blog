import Link from "next/link";
import React from "react";

const MainNavigation = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="www.google.com">google</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
