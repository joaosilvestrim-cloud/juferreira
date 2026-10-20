import Image from "next/image";
import Link from "next/link";

/** Logo oficial Ju Ferreira (assinatura "Ju" + FERREIRA), SVG do pacote de desenvolvimento v1.1. */
export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <Link href="/" aria-label="Ju Ferreira, início" className="group flex items-center">
      <Image
        src={tone === "light" ? "/brand/logo-ju-ferreira-light.svg" : "/brand/logo-ju-ferreira.svg"}
        alt="Ju Ferreira"
        width={1040}
        height={720}
        unoptimized
        priority
        className="h-11 w-auto transition-opacity duration-300 group-hover:opacity-75 sm:h-12"
      />
    </Link>
  );
}
