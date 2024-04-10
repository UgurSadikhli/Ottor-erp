import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Menu from "./components/Menu/menu";
import Modal from "./components/Modals/Modal"
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className={"main"}>
          {children}
      </div>

      // {/*<div className="main">*/}
      // {/*  <div className="left">*/}
      // {/*    {" "}*/}
      // {/*    <Menu />{" "}*/}
      // {/*  </div>*/}
      //
      // {/*  <div className="right">*/}
      // {/*    <Header />*/}
      // {/*    {children}*/}
      // {/*    /!*<Modal mainText={"Congratulations"} minorText={"You have successfully changed your password."} buttonText={"Back To Login"}/>*!/*/}
      // {/*    <Footer />*/}
      // {/*  </div>*/}
      // {/*</div>*/}

  );
}


