import Greeting from "@/app/Components/GreetingComponent";
import Link from "next/link";


export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Hello
      <Link href="/">Go To App Router Home Page</Link>
      <Greeting />
      {children}
    </div>
  );
}
