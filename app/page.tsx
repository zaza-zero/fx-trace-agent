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
        <h1>Currency question</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. how much is 100 EUR in singapore dollars?"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>

        <section className={styles.block}>
          <h2>Model tool call</h2>
          <p className={styles.placeholder}>
            shown here once wired up: whether the assistant decides to
            convert, ask a follow-up, or decline the request
          </p>
        </section>

        <section className={styles.block}>
          <h2>Parsed arguments</h2>
          <p className={styles.placeholder}>
            shown here once wired up: the amount and currency pair extracted
            from your question
          </p>
        </section>

        <section className={styles.block}>
          <h2>Tool result</h2>
          <p className={styles.placeholder}>
            shown here once wired up: the exchange rate applied and the
            computed total
          </p>
        </section>

        <section className={styles.block}>
          <h2>Final answer</h2>
          <p className={styles.placeholder}>
            shown here once wired up: the reply text sent back to the user
          </p>
        </section>
      </main>
    </div>
  );
}
