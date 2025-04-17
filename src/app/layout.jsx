import Layout from "@/Components/Layout/Layout";
import "./globals.css";

export const metadata = {
  title: "Home Page",
  description: "Home Page of The Sixth Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        /> */}
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
