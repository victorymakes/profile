import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const revalidate = false;

// Image metadata
export const alt = `${profile.person.name} - ${profile.person.headline}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Unsupported image type: unknown in production only
// https://github.com/vercel/satori/issues/626
async function fetchImageAsBase64(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
    cache: "force-cache",
  });
  const arrayBuffer = await response.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");
  const type = response.headers.get("content-type");
  return `data:${type || "image/png"};base64,${base64}`;
}

// Image generation
export default async function Image() {
  // Ensure skills is an array
  const skills = Array.isArray(profile.skills) ? profile.skills : [];
  const topSkills = skills.slice(0, 5);

  // Fetch avatar if available
  let avatarBase64: string | null = null;
  if (profile.person.avatar) {
    try {
      avatarBase64 = await fetchImageAsBase64(profile.person.avatar);
    } catch (error) {
      console.error("Failed to fetch avatar:", error);
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          position: "relative",
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15), transparent 50%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            padding: "80px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Avatar */}
          {avatarBase64 && (
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid rgba(99, 102, 241, 0.5)",
                boxShadow: "0 0 40px rgba(99, 102, 241, 0.3)",
                display: "flex",
              }}
            >
              <img
                src={avatarBase64}
                alt={profile.person.name}
                width="150"
                height="150"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          )}

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#ffffff",
              textAlign: "center",
              letterSpacing: "-0.025em",
            }}
          >
            {profile.person.name}
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: "36px",
              color: "#a1a1aa",
              textAlign: "center",
              maxWidth: "900px",
              fontWeight: "500",
            }}
          >
            {profile.person.headline}
          </div>

          {/* Location */}
          {profile.person.location && (
            <div
              style={{
                fontSize: "24px",
                color: "#71717a",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              📍 {profile.person.location}
            </div>
          )}

          {/* Top Skills - Display first 5 */}
          {topSkills.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
                maxWidth: "1000px",
                marginTop: "24px",
              }}
            >
              {topSkills.map((skill) => (
                <div
                  key={skill.text}
                  style={{
                    padding: "12px 24px",
                    background: "rgba(99, 102, 241, 0.1)",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                    borderRadius: "8px",
                    color: "#a5b4fc",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  {skill.text}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899, #6366f1)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
