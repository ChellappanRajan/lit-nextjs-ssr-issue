import Greeting from "@/app/Components/GreetingComponent";
import Link from "next/link";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Hello
      <Link href="/">Home</Link>
      <Greeting />
      {children}
    </div>
  );
}
