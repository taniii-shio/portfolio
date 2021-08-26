import Link from "next/link";
import PostList from "../src/components/posts/PostList";

export default function Portfolio() {
  return (
    <>
      <h1>portfolio</h1>
      <PostList />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
