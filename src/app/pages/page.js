import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";

export default function News() {
  return (
    <>
      <Head>
        <title>Logopedka - First post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
  
    </>
  );
}