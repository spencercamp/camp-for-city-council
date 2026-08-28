import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Steve Camp for San Clemente City Council, District 1 — November 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const headshot = await readFile(
    join(process.cwd(), "public/images/headshot.jpg")
  );
  const headshotSrc = `data:image/jpeg;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #1B3A5C 0%, #0F2540 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 0 60px 70px",
            width: "58%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 36,
            }}
          >
            <div
              style={{
                background: "#C53030",
                color: "white",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 3,
                padding: "8px 20px",
                borderRadius: 999,
                textTransform: "uppercase",
              }}
            >
              Nov 2026
            </div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 24 }}>
              San Clemente · District 1
            </div>
          </div>
          <div
            style={{
              color: "white",
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -3,
            }}
          >
            STEVE
          </div>
          <div
            style={{
              color: "white",
              fontSize: 148,
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: -5,
            }}
          >
            CAMP
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 36,
            }}
          >
            <div style={{ width: 48, height: 2, background: "#F59E0B" }} />
            <div
              style={{
                color: "rgba(255,255,255,0.92)",
                fontSize: 28,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              For San Clemente City Council
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "42%",
            alignItems: "center",
            justifyContent: "center",
            padding: 50,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={headshotSrc}
            alt=""
            width={420}
            height={525}
            style={{
              width: 420,
              height: 525,
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: 28,
              boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
