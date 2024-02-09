import Head from "next/head";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Witaj na stronie Fajnej Logopedki!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-background">
        <Navbar />
        <Header />
        <Intro />
        <Section1 />
        <Section2 />
      </body>
    </>
  );
};