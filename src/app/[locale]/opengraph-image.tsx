import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const alt = "Traza — General contractor in Austin, Texas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

let fontsPromise: Promise<{ fraunces: Buffer; space: Buffer }> | null = null;

function loadFonts(): Promise<{ fraunces: Buffer; space: Buffer }> {
  fontsPromise ??= Promise.all([
    readFile(path.join(process.cwd(), "src/assets/Fraunces.ttf")),
    readFile(path.join(process.cwd(), "src/assets/SpaceGrotesk.ttf")),
  ]).then(([fraunces, space]) => ({ fraunces, space }));

  return fontsPromise;
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  const { fraunces, space } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#f4f1ec",
          position: "relative",
          fontFamily: "Space Grotesk",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 400px 64px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="38" height="38" viewBox="0 0 32 32">
              <path
                d="M5 9h22M16 9v18M5 27h22"
                fill="none"
                stroke="#c4552d"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <div
              style={{
                fontSize: 18,
                letterSpacing: 7,
                textTransform: "uppercase",
                color: "#c4552d",
                display: "flex",
              }}
            >
              {dict.common.brand}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Fraunces",
                fontSize: 76,
                lineHeight: 1.02,
                letterSpacing: -1.5,
                color: "#14171a",
                maxWidth: 640,
                display: "flex",
              }}
            >
              {dict.home.hero.title.lead}{" "}
              <span style={{ fontStyle: "italic", color: "#c4552d" }}>
                {dict.home.hero.title.accent}
              </span>
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 19,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#8a8d8f",
                display: "flex",
              }}
            >
              {dict.home.hero.eyebrow}
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 18, color: "#8a8d8f" }}>
            {site.domain}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 360,
            height: "100%",
            backgroundColor: "#c4552d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="200" height="300" viewBox="0 0 32 48">
            <path
              d="M4 6h24M16 6v36M4 42h24"
              fill="none"
              stroke="#f4f1ec"
              strokeWidth="0.9"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: fraunces,
          style: "normal",
          weight: 400,
        },
        {
          name: "Space Grotesk",
          data: space,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
