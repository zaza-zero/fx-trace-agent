"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [question, setQuestion] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Ask an FX question</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. how much is 100 EUR in singapore dollars?"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Ask
          </button>
        </form>

        <section className={styles.block}>
          <h2>Model decision</h2>
          <p className={styles.placeholder}>example: convert</p>
        </section>

        <section className={styles.block}>
          <h2>Tool call arguments</h2>
          <p className={styles.placeholder}>
            example: {"{ amount: 100, from: \"EUR\", to: \"SGD\" }"}
          </p>
        </section>

        <section className={styles.block}>
          <h2>Tool result</h2>
          <p className={styles.placeholder}>
            example: {"{ rate: 1.4531, result: \"S$145.31\" }"}
          </p>
        </section>

        <section className={styles.block}>
          <h2>Final answer</h2>
          <p className={styles.placeholder}>
            example: &quot;That&apos;s about S$145.31.&quot;
          </p>
        </section>
      </main>
    </div>
  );
}
