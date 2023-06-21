import "../styles/global.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jira",
  description: "Project management",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  //   { media: "(prefers-color-scheme: dark)", color: "#151515" },
  // ],
  // appleWebApp: {
  //   title: "ChatGPT Next Web",
  //   statusBarStyle: "default",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <meta name="config" content={JSON.stringify(getClientConfig())} /> */}
        {/* <link rel="manifest" href="/site.webmanifest"></link> */}
        {/* <script src="/serviceWorkerRegister.js" defer></script> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
