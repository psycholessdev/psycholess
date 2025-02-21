import styles from './page.module.css';
import Header from "@/app/ui/components/header/Header";

export default function Home() {
  return (
      <>
        <Header />
        <div className={styles.screen1}>
            <div className={styles.block}>The site is being developed right now.</div>
        </div>
      </>
  );
}
