import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Menu from "../components/Menu/menu";
import styles from "./main-layout.module.css"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <div className={`${styles.main}`}>
        <div className={`${styles.left}`}>
          <Menu />
        </div>

        <div className={`${styles.right}`}>
          <Header />
            <div className={styles.content}>
          {children}
            </div>
          <Footer />
        </div>
      </div>
  );
}

