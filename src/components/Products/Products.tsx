import React from 'react';
import Link from 'next/link';
import styles from './Products.module.scss';

const production = [
  { id: 0, title: `Фланцы`, img: `/images/flancy.png`, url: `flancy` },
  { id: 1, title: `Поковки`, img: `/images/pokovky.png`, url: `pokovky` },
  { id: 2, title: `Тройники`, img: `/images/troyniki.png`, url: `troyniki` },
  { id: 3, title: `Отводы`, img: `/images/otvody.png`, url: `otvody` },
  { id: 4, title: `Заглушки`, img: `/images/zaglushky.png`, url: `zaglushki` },
  { id: 5, title: `Переходы`, img: `/images/perexody.png`, url: `perexody` },
  { id: 6, title: `Опоры`, img: `/images/opory.jpg`, url: `opory` },
  { id: 7, title: `Днища`, img: `/images/dnisha.png`, url: `dnisha` },
  {
    id: 8,
    title: `Прокладки`,
    img: `/images/prokladki/1.jpg`,
    url: `prokladki`,
  },
  {
    id: 9,
    title: `Трубные решетки`,
    img: `/images/reshetki.jpg`,
    url: `reshetki`,
  },
  {
    id: 10,
    title: `Монтажные катушки`,
    img: `/images/katushki.png`,
    url: `katushki`,
  },
  {
    id: 11,
    title: `Нефтепромысловое оборудование`,
    img: `/images/neft.png`,
    url: `neft`,
  },
];

const Products = () => (
  <div className={styles.production}>
    <h2 className={styles.productionTitle}>Продукция</h2>
    <ul className={styles.productionList}>
      {production.map((prod) => (
        <Link key={prod.id} href={`product?prod=${prod.url}`}>
          <li className={styles.productionItem}>
            <div className={styles.productionItemText}>
              <h5>{prod.title}</h5>
            </div>
            <img
              className={styles.productionItemImage}
              src={prod.img}
              alt="продукция"
            />
          </li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Products;
