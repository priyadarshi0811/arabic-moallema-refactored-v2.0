import Head from "next/head";
import styles from "@/styles/Home.module.css";
// import grayBgImg from "@/components/src/img/grayBgImg.png";
import grayBgImg from "@/components/src/img/colorBgImg.png";
import InProgress from "@/components/Layout/screen/InProgress";
import Welcome from "@/components/Layout/section/Welcome";
import TopTitleWithImg from "@/components/Layout/section/TopTitleWithImg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quran E-Learning</title>
        <meta name="description" content="Quran E-Learning App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={styles.main}
        style={{
          backgroundImage: `url(${grayBgImg.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "100%",
          backgroundPosition: "center top",
          widows: "100vw",
          height: "100vh",
          margin: '0px'
        }}
      >
        <TopTitleWithImg />
        <h1 className="text-center p-10 text-3xl text-white">Home Page</h1>
        {/* <InProgress/> */}
        <Welcome />
        <div className="w-full text-center">

        <Link href="/login" className="w-full px-5 py-2 rounded-md  text-center text-white bg-cyan-700 hover:bg-cyan-900">Login</Link>
        </div>
      </main>
    </>
  );
}
