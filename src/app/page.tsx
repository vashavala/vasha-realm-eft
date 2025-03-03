import { Container } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    // font-[family-name:var(--font-geist-sans)] font-[family-name:var(--font-geist-mono)]
    <Container>
      <div className="size-full flex flex-col items-center justify-center font-[family-name:var(--font-geist-mono)]">
        <Link href="https://space.bilibili.com/23395417" className=" text-[3rem] font-bold hover:text-[var(--eftc)] duration-200">bilibili - 叫我字母啦</Link>
        <Link href="/quests">go see </Link>
      </div>
    </Container>
  );
}