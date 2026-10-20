import { loadOverrides, seoFor } from "@/lib/content";
import type { Metadata } from "next";
import {
  HomeEncerramento,
  HomeFuturos,
  HomeHero,
  HomeIdeias,
  HomeJu,
  HomeOrganizacoes,
  HomePessoas,
  HomeProva,
  HomeTensao,
} from "@/components/sections/home/HomeBlocks";

const DEFAULT_META: Metadata = {};

export async function generateMetadata(): Promise<Metadata> {
  return seoFor("/", DEFAULT_META);
}

export default async function HomePage() {
  await loadOverrides(); // textos/imagens ajustados no painel
  return (
    <>
      <HomeHero />
      <HomeTensao />
      <HomeFuturos />
      <HomeJu />
      <HomeOrganizacoes />
      <HomeProva />
      <HomePessoas />
      <HomeIdeias />
      <HomeEncerramento />
    </>
  );
}
