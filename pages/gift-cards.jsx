import MainLayout from "../components/MainLayout";
import giftScreen from "../images/gift-screen.jpg";
import styles from "../styles/Home.module.css";

export default function GiftCards() {
  const settings = {
    infinite: true,
    autoplay: true,
    cssEase: 'linear',
    speed: 3000
  };

  return (
    <MainLayout>
      <img className={styles.imageScreen} src={giftScreen} />
    </MainLayout>
  );
}
