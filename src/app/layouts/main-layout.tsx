import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Menu from "../components/Menu/menu";
import styles from "./MainLayout.module.css";

export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className={styles.main}>
            <Menu />
            <div className={styles.right}>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
}
