import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Menu from "../components/Menu/menu";
import styles from "./MainLayout.module.css";
import Modal from "../components/Modals/Modal";
import { ReactElement } from "react";

const ugur = () => {};


export default function MainLayout({
  children,title,label,icon
}: Readonly<{
  children: React.ReactNode;title:string; label: string;
  icon?: ReactElement;
}>) {
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.right}>
        <Header label={label} title={title} icon={icon} />
        {/* <Modal mainText={"Ugur"} minorText={"Maga"} buttonText={"Vugito"} onButtonClick={ugur} /> */}
        {children}
        <Footer />
      </div>
    </div>
  );
}
