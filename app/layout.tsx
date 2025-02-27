import Header from "../components/Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#F1E9DA] pb-20">
          <div className="mx-auto max-w-6xl">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
