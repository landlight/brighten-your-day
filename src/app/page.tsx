"use client";

import styles from "./page.module.css";
import { CardBox } from "./components/CardBox";
import { useState } from "react";
import { NameForm } from "./components/NameForm";

export default function Home() {
  let [ name, setName ] = useState(localStorage.getItem("name"));

  return (
    <main className={styles.main}>
      {!name && <NameForm save={(input) => {setName(input); localStorage.setItem("name", input)}}/>}
      {name && <CardBox title="Welcome" description={`Hello, ${name}!`} />}
    </main>
  );
}
