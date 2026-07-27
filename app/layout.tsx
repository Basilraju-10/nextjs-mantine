import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Parts Catalog",
  description: "Aircraft Parts Catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}