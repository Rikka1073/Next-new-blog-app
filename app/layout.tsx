import Header from "../components/Header";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#F1E9DA]">
          <div className="max-w-6xl mx-auto">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
