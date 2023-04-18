import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useRef } from "react";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [audio, setAudio] = useState(null);
  const elementRef = useRef();

  const playWord = () => {
    const audio = elementRef.current;
    console.log("play this word");
    audio.play();
  };
  return (
    <>
      <Head>
        <title>Learn Words Game</title>
        <meta name="description" content="Learning word in new language" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Hello, Maddie. Let's learn new Thai word</p>
        </div>

        <div className={styles.center}>
          <header>play the word by clicking on the images</header>
        </div>

        <div className={styles.grid}>
          <button onClick={playWord}>
            <Image
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
              width={200}
              height={180}
              alt="tree"
              priority
            />
            <audio
              id="tree"
              ref={elementRef}
              src="/audio/tree.m4a"
              type="audio/mp4"
            ></audio>
          </button>

          {/* <button onClick={playWord}>
            <Image
              src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a"
              width={200}
              height={180}
              alt="apple"
            />
            <audio
              ref={(e) => setAudio(e)}
              src="/audio/apple-word.mp3"
              type="audio/mp4"
            ></audio>
          </button> */}
        </div>
      </main>
    </>
  );
}
