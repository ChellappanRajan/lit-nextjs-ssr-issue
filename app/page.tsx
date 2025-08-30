import Greeting from "./Components/GreetingComponent";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <Link className="link" href="/about">Go To Page Router</Link>
      <Greeting></Greeting>
    </div>
  );
}
