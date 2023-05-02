import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useRef } from "react";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [audio, setAudio] = useState(null);
  const elementRef1 = useRef();
  const elementRef2 = useRef();

  const playWord = (src) => {
    const audio = new Audio(src);

    console.log("audio", audio);
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
          <p>Hello, Maddie. Let's learn new Thai words</p>
        </div>
        <div className={styles.description}>
          <p>play the word by clicking on the images</p>
        </div>
        <div className={styles.grid}>
          <button onClick={() => playWord("/audio/tree.mp3")}>
            <Image
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
              width={200}
              height={150}
              alt="tree"
              priority
            />
          </button>

          <button onClick={() => playWord("/audio/apple-word.mp3")}>
            <Image
              src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a"
              width={200}
              height={180}
              alt="apple"
            />
          </button>
          <button onClick={() => playWord("/audio/car.mp3")}>
            <Image
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1"
              width={200}
              height={180}
              alt="car"
              priority
            />
          </button>
        </div>
      </main>
    </>
  );
}
