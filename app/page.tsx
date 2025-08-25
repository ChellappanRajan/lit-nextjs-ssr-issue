import styles from "./page.module.css";
import Greeting from "./Components/GreetingComponent";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/about">About</Link>
      <Greeting></Greeting>
    </div>
  );
}
