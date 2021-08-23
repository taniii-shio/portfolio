import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DisabledTabs from "../components/DisabledTabs";

export default function Home() {
  return (
    <Layout>
      <DisabledTabs />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>NAOTO SHIOYA</h1>
        <p>WELCOME TO MY PORTFOLIO</p>
      </main>

      <Footer />
    </Layout>
  );
}
