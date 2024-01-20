import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "98.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-98-background bg-no-repeat bg-cover bg-fixed`}
      >
        {children}
      </body>
      <footer>
        <div className="window container mx-auto mt-10">
          <div className="title-bar">
            <div className="title-bar-text">Footer</div>
            <div className="title-bar-controls">
              <button aria-label="Help"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <p className="mb-5 text-lg">
              Return to <Link href="/">Home</Link>
            </p>

            <div className="columns-2">
              <p className="text-lg">
                Created by{" "}
                <a
                  href="http://vtlanglois.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vincent Langlois
                </a>
                .
              </p>
              <p className="text-lg">
                <a
                  href="https://github.com/vtlanglois/Windows-98-UI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </html>
  );
}
