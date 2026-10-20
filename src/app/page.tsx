import { shown } from "@/lib/editable";
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
      {shown("HomeHero") && <HomeHero />}
      {shown("HomeTensao") && <HomeTensao />}
      {shown("HomeFuturos") && <HomeFuturos />}
      {shown("HomeJu") && <HomeJu />}
      {shown("HomeOrganizacoes") && <HomeOrganizacoes />}
      {shown("HomePessoas") && <HomePessoas />}
      {shown("HomeIdeias") && <HomeIdeias />}
      {shown("HomeEncerramento") && <HomeEncerramento />}
    </>
  );
}
