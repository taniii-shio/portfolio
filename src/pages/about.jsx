import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/layout";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Layout>
      <Header />

      <h1>about me</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <Footer />
    </Layout>
  );
}
