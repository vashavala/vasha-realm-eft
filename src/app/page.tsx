'use client';
import Link from "next/link";
import { Container } from "@/components";
import { useTranslation } from "@/utils/i18n";
import { Header } from "@/biz-components";
// import SvgPanel from "@/svgs/svg-panel";


export default function Home() {
  const { t } = useTranslation()
  return (
    // font-[family-name:var(--font-geist-sans)] font-[family-name:var(--font-geist-mono)]
    <Container header={<Header />}>
      {/* <SvgPanel /> */}
      <div className="size-full flex flex-col gap-[2rem] items-center justify-center font-[family-name:var(--font-geist-mono)]">
        <Link href="https://space.bilibili.com/23395417" target="_blank" className="text-[3rem] font-bold hover:text-[var(--eftc)] duration-200">bilibili - 叫我字母啦</Link>
        <Link href="/quests" className="text-[1.2rem] font-bold hover:text-[var(--eftc)] duration-200">{t('home.go_see_rfk_quests')}</Link>
      </div>
    </Container>
  );
}