import styles from './Header.module.css';
import Image from "next/image";
import favicon from '@/public/favicon.png';
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.header__logo} href="/">
                <Image src={favicon}
                       alt="Psycholess logo"
                       width={36}
                       height={53}
                       className={styles.header__logoImg}
                />
                <div className={styles.header__logoText}>
                    psycho<span className={styles.header__logoText_pink}>less</span>
                </div>
            </Link>
        </header>
    )
}
