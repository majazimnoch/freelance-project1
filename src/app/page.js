import Head from "next/head";
import Link from "next/link";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Witaj na stronie Fajnej Logopedki!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Intro />
    </>
  );
}
