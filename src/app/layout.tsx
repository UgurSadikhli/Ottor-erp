import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Menu from "./components/Menu/menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="main">
        <div className="left">
          {" "}
          <Menu />{" "}
        </div>

        <div className="right">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
