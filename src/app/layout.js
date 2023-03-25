import { Poppins } from "@next/font/google";
import "@/styles/reset.css";
import "@/styles/global.css";

/* Components  */
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

const poppinsFontFamily = Poppins({ weight: "500", subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppinsFontFamily.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
