import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "App del Clima",
  description: "Clima",
};

export default function RootLayout({ children }) {
  return (
    <html style={{ width: "100%" }} lang="en">
      <body
        style={{
          width: "100%",
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
        }}
        className={raleway.className}
      >
        {children}
      </body>
    </html>
  );
}
