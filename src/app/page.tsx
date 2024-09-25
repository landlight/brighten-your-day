"use client";

import styles from "./page.module.css";
import { CardBox } from "./components/CardBox";
import { useEffect, useState } from "react";
import { NameForm } from "./components/NameForm";

export default function Home() {
  let [name, setName] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let value = localStorage.getItem("name") || "";
    setName(value);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      {!name && (
        <NameForm
          save={(input) => {
            setName(input);
            localStorage.setItem("name", input);
          }}
        />
      )}
      {name && <CardBox title="Welcome" description={`Hello, ${name}!`} />}
    </main>
  );
}
