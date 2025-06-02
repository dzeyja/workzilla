import type { Metadata } from "next";
import "app/styles/index.scss";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import { StoreProvider } from "app/Providers/StoreProvider";
import { InitUser } from "app/Providers/InitUser";

export const metadata: Metadata = {
  title: "Work King",
  description: "App for remote work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <InitUser>
        <html lang="en">
          <body>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </body>
        </html>
      </InitUser>
    </StoreProvider>
  );
}
