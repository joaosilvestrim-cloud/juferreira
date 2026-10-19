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

export default function HomePage() {
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
