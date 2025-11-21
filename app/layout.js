import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Fremont Basketball Academy",
  description: "Develop Your Game, Build Your Future",
  openGraph: {
    title: "Fremont Basketball Academy",
    description: "Develop Your Game, Build Your Future",
    type: "website",
    images: [
      {
        url: "/logoLight.png",
        width: 4383,
        height: 1875,
        alt: "Fremont Basketball Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fremont Basketball Academy",
    description: "Develop Your Game, Build Your Future",
    images: ["/logoLight.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
