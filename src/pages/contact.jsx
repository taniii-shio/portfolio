import Link from "next/link";
import Layout from "../components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <Layout>
      <Header />

      <h1>contact</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <Footer />
    </Layout>
  );
}
