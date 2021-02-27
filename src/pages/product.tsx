import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import styles from './styles/product.module.scss';

const production = [
  {
    id: `katushki`,
    title: `Монтажные Катушки`,
    description: `Катушки монтажные (фланцевые) — предназначены для замещения на время проведения
                  ремонта запорной арматуры, например, задвижек, оборудования на участке трубопровода.
                  Катушки монтажные состоят из отрезка трубы и фланцев с каждой стороны.
                  ООО «Сибмаш» изготавливает монтажные катушки в соответствии с российскими и
                  международными стандартами.`,
    image1: `/images/katushki/1.jpg`,
    image2: `/images/katushki/2.jpg`,
  },

  {
    id: `dnisha`,
    title: `Днища`,
    description: `Днище — это элемент аппарата или сосуда цилиндрической или конической формы.
    По мнению специалистов, наиболее рациональная форма днища  – эллиптическая поверхность.
    Она позволяет при минимальной толщине листа равномерно распределить давление на
    поверхность, хорошо противостоят перепадам давления и гидродинамическим ударам, проста в
    производстве.
    ООО «Сибмаш» изготавливает днища в соответствии с российскими и международными
    стандартами.`,
    image1: `/images/dnisha/1.jpg`,
    image2: `/images/dnisha/2.jpg`,
  },
  {
    id: `opory`,
    title: `Опоры`,
    description: `Опоры для труб — это незаменимые конструктивные элементы при прокладке различных
    коммуникаций. Эти изделия принимают на себя нагрузку трубопровода, которая впоследствии
    распределяется по несущим конструкциям или же передаётся почве.
    ООО «Сибмаш» изготавливает опоры в соответствии с российскими и международными
    стандартами.`,
    image1: `/images/opory/1.jpg`,
    image2: `/images/opory/2.jpg`,
  },
  {
    id: `zaglushki`,
    title: `Заглушки`,
    description: `Заглушки предназначены для перекрытия неиспользуемых участков трубопроводов, а также в
    конструкциях различных емкостей и теплообменников.
    ООО «Сибмаш» изготавливает заглушки в соответствии с российскими и международными
    стандартами.`,
    image1: `/images/zagl/1.jpg`,
    image2: `/images/zagl/2.jpg`,
  },
  {
    id: `neft`,
    title: `Нефтепромысловое оборудование`,
    description: `Нефтепромысловое оборудование – это совокупность агрегатов и систем, необходимых для
    разработки нефтяных месторождений, добычи нефти и ее транспортировки.
    ООО «Сибмаш» изготавливает манифольды противовыбросовые и буровые (манифольдные
    линии) в различных вариантах по типу соединений: фланцы и фланцевые соединения (проходные,
    глухие, резьбовые, под приварку), бугельные, быстроразъемные соединения (БРС).`,
    image1: `/images/neft/1.jpeg`,
    image2: `/images/neft/2.jpg`,
  },
  {
    id: `otvody`,
    title: `Отводы`,
    description: `Отводы – один из видов деталей трубопроводов, предназначенных для плавного изменения
    направления трубопровода путем соединения сваркой встык труб, расположенных под углом. Все
    отводы делятся на крутоизогнутые и гнутые.
    ООО «Сибмаш» изготавливает отводы в соответствии с российскими и международными
    стандартами.`,
    image1: `/images/otvody/1.jpg`,
    image2: `/images/otvody/2.jpg`,
  },
  {
    id: `perexody`,
    title: `Переходы`,
    description: `Переходы — детали трубопроводов, применяемые для соединения между собой труб разного
    диаметра, в том числе высокого давления. Применяются на любых типах трубопроводов: на
    предприятиях нефтяной, газовой и химической промышленности.
    ООО «Сибмаш» изготавливает концентрические переходы в соответствии с российскими и
    международными стандартами.`,
    image1: `/images/perexody/1.jpg`,
    image2: `/images/perexody/2.jpg`,
  },
  {
    id: `pokovky`,
    title: `Поковка`,
    description: `Поковка – это заготовка (промежуточное звено в производстве какой-либо детали,
      оборудования), изготавливаемое из стали различных марок, применяемая во многих отраслях
      промышленности, автомобилестроении. Особенностью такой заготовки является ее схожесть про
      форме и размеру с будущим изделием. Такие свойства этих изделий, как прочность, гибкость,
      износостойкость сделали их незаменимыми составляющими элементами в производстве
      различных деталей.
      ООО «Сибмаш» изготавливает поковки в соответствии с российскими и международными
      стандартами.`,
    image1: `/images/pokovki/1.jpg`,
    image2: `/images/pokovki/2.jpeg`,
  },
  {
    id: `prokladki`,
    title: `Прокладки`,
    description: `Для обеспечения герметичности фланцевых стыков при большом рабочем давлении
    рекомендуется использовать специальные металлические прокладки для фланцевых соединений.
    Эта продукция, в отличие от традиционных фланцевых аналогов, характеризуется большей
    упругостью, герметичностью зазоров при смене температурного режима или давления. ООО
    «Сибмаш» изготавливает металлические прокладки в соответствии с российскими и
    международными стандартами.`,
    image1: `/images/prokladki/1.jpg`,
    image2: `/images/prokladki/2.jpg`,
  },
  {
    id: `troyniki`,
    title: `Тройники`,
    description: `Тройник — деталь трубопровода, предназначенная для присоединения к основному
    трубопроводу боковых ответвлений.
    ООО «Сибмаш» изготавливает тройники в соответствии с российскими и международными
    стандартами.`,
    image1: `/images/troyniki/1.jpg`,
    image2: `/images/troyniki/2.jpg`,
  },
  {
    id: `flancy`,
    title: `Фланцы`,
    description: `Фланцевые соединения – один из видов деталей трубопроводов, сетей инженерно-технического
    обеспечения, систем трубопроводного транспорта, обеспечивающий простоту монтажа и ремонта.
    ООО «Сибмаш» изготавливает фланцы в соответствии с российскими и международными
    стандартами.`,
    image1: `/images/flancy/1.jpg`,
    image2: `/images/flancy/2.jpg`,
  },
  {
    id: `reshetki`,
    title: `Трубные решетки`,
    description: `Трубная решетка — важнейший элемент любого теплообменного аппарата. Трубные решетки –
    перфорированные диски с отверстиями для теплообменных трубок, отделяющие трубное
    пространство от межтрубного.
    ООО «Сибмаш» изготавливает трубные решетки в соответствии с российскими и
    международными стандартами.`,
    image1: `/images/reshetki/1.png`,
    image2: `/images/reshetki/2.png`,
  },
];

const Product: React.FC = () => {
  const router = useRouter();
  const { prod } = router.query;

  return (
    <MainLayout title="ООО СИБМАШ">
      <div className={styles.product}>
        {production
          .filter((product) => prod === product.id)
          .map((product) => (
            <div key={product.id}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <div className={styles.productInfo}>
                <p className={styles.productDesc}>{product.description}</p>
                <div className={styles.productPhoto}>
                  <img src={product.image1} />
                  <img src={product.image2} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </MainLayout>
  );
};

export default Product;
