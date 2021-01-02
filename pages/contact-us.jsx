import MainLayout from "../components/MainLayout";
import contactScreen from "../images/contact-us-screen.jpg";
import styles from "../styles/Home.module.css";

export default function GiftCards() {
  return (
    <MainLayout>
      <img className={styles.imageScreen} src={contactScreen} />
      <h1>Contact us page</h1>
    </MainLayout>
  );
}
