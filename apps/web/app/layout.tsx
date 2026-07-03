import "./globals.css";

export const metadata = {
  title: "Slot Monitor Pro",
  description: "Real-time Slot Monitoring Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}