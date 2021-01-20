import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <a className={styles.footerItem} href="mailto:proxicham@gmail.com">
      proxicham@gmail.com
    </a>
    <div>
      <p>
        <a className={styles.footerItem} href="tel:8(3812)-399-859">
          8(3812)-399-859
        </a>
      </p>
      <p>
        <a className={styles.footerItem} href="tel:8 (913) 652-54-04">
          8 (913) 652-54-04
        </a>
      </p>
    </div>
    <div>
      <p className={styles.footerItem}>
        644031, Россия, Омская область, г. Омск
      </p>
      <p className={styles.footerItem}>20-я Линия, 65</p>
    </div>
  </footer>
);

export default Footer;
