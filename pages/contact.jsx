import Link from "next/link";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>NaotoShioya/Contact</title>
      </Head>
      <h1>contact</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
