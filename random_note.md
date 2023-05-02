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
<p>Hello, Maddie. Let's learn new Thai word</p>
</div>

        <div className={styles.center}>
          <header>play the word by clicking on the images</header>
        </div>

        <div className={styles.grid}>
          <button onClick={() => playWord("/audio/tree.m4a")}>
            <Image
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
              width={200}
              height={180}
              alt="tree"
              priority
            />
            {/* <audio
              id="tree"
              ref={elementRef1}
              src="/audio/tree.m4a"
              type="audio/mp4"
            ></audio> */}
          </button>

          <button onClick={() => playWord("/audio/apple-word.mp3")}>
            <Image
              src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a"
              width={200}
              height={180}
              alt="apple"
            />
            {/* <audio
              id="apple"
              ref={elementRef2}
              src="/audio/apple-word.mp3"
              type="audio/mp4"
            ></audio> */}
          </button>
        </div>
      </main>
    </>

);
}

———————— version 1 ————————

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

const playWord = (element) => {
let audio;
if (element === 1) {
audio = elementRef1.current;
} else {
audio = elementRef2.current;
}

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
<p>Hello, Maddie. Let's learn new Thai word</p>
</div>

        <div className={styles.center}>
          <header>play the word by clicking on the images</header>
        </div>

        <div className={styles.grid}>
          <button onClick={() => playWord(1)}>
            <Image
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
              width={200}
              height={180}
              alt="tree"
              priority
            />
            <audio
              id="tree"
              ref={elementRef1}
              src="/audio/tree.m4a"
              type="audio/mp4"
            ></audio>
          </button>

          <button onClick={() => playWord(2)}>
            <Image
              src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a"
              width={200}
              height={180}
              alt="apple"
            />
            <audio
              id="apple"
              ref={elementRef2}
              src="/audio/apple-word.mp3"
              type="audio/mp4"
            ></audio>
          </button>
        </div>
      </main>
    </>

);
}
