import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

type Opts = { eyebrow: string; title: string; em?: string; photo?: "rua" | "retrato-biblioteca" | "palco" | "lideranca" | "contato" | "escrita" };

/** Cartão de compartilhamento (LinkedIn/WhatsApp) no visual do site. */
export async function ogCard({ eyebrow, title, em, photo = "rua" }: Opts) {
  const dir = join(process.cwd(), "src/assets/og");
  const [serif, sans, img] = await Promise.all([
    readFile(join(dir, "Cormorant-500.ttf")),
    readFile(join(dir, "Jost-400.ttf")),
    readFile(join(dir, `${photo}.jpg`)),
  ]);
  const src = `data:image/jpeg;base64,${img.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#FAF7F2", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "62%", padding: "64px 56px 56px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, fontFamily: "Jost", fontSize: 22, letterSpacing: 8, color: "#181411" }}>
            <div style={{ width: 34, height: 34, borderRadius: 999, border: "3px solid #B80C10" }} />
            JU FERREIRA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Jost", fontSize: 20, letterSpacing: 6, color: "#B80C10", textTransform: "uppercase", marginBottom: 22 }}>
              {eyebrow}
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontFamily: "Cormorant", fontSize: 76, lineHeight: 1.0, color: "#181411" }}>
              <span>{title}</span>
              {em && <span style={{ color: "#B80C10" }}>{em}</span>}
            </div>
          </div>
          <div style={{ width: 120, height: 4, background: "#B80C10", borderRadius: 4 }} />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={460} height={630} style={{ objectFit: "cover", width: "38%", height: "100%" }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Cormorant", data: serif, style: "normal", weight: 500 },
        { name: "Jost", data: sans, style: "normal", weight: 400 },
      ],
    },
  );
}
