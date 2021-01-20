import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const navigation = [
  { id: 0, title: `Создание чертежей`, href: `/plan` },
  { id: 1, title: `Производство`, href: `/production` },
  { id: 2, title: `Контакты`, href: `/contacts` },
  { id: 3, title: `О компании`, href: `/about` },
  { id: 4, title: `Заказ`, href: `/order` },
];

const Header = () => (
  <>
    <header className={styles.header}>
      <Link href="/">
        <img src="images/logo.png" alt="лого" className={styles.headerLogo} />
      </Link>
      <h1 className={styles.headerTitle}>ООО “СИБИРСКОЕ МАШИНОСТРОЕНИЕ”</h1>
      <a href="tel:8(3812)-399-859" className={styles.headerPhone}>
        8(3812)-399-859
      </a>
    </header>
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {navigation.map((nav) => (
          <Link href={nav.href} key={nav.id}>
            <li className={styles.navigationListLink}>{nav.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  </>
);

export default Header;
