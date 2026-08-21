import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #7C6CF2 0%, #8FD3D3 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M12 2.4L13.7 8.3L19.6 10L13.7 11.7L12 17.6L10.3 11.7L4.4 10L10.3 8.3L12 2.4Z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
