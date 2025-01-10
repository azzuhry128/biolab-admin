import localFont from "next/font/local";
import "./globals.css";
import { GlobalStateProvider } from "./store/state";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/56e52453db.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <GlobalStateProvider>
          {children}
        </GlobalStateProvider>
      </body>
    </html>
  );
}
