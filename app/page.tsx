import styles from "./page.module.css";
import Greeting from "./Components/GreetingComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <Greeting></Greeting>
    </div>
  );
}
