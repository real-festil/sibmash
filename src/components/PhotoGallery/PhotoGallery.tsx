/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import GalleryLeftArrowIcon from '@/icons/GalleryLeftArrowIcon';
import GalleryRightArrowIcon from '@/icons/GalleryRightArrowIcon';
import styles from './PhotoGallery.module.scss';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2400 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 2400, min: 1420 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1420, min: 800 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
  },
};

const photos = [
  { id: 0, photo: `/images/PressureVessel.jpg` },
  {
    id: 1,
    photo: `/images/tuv-rheinland-asme-boiler-and-pressure-vessel-inspection_core_2_2_1.jpg`,
  },
  {
    id: 2,
    photo: `/images/tuv-rheinland-production-and-operation-of-pressure-equipment_core_2_2_1.jpg`,
  },
];

const CustomButtonGroupAsArrows = ({ next, previous }: ButtonGroupProps) => (
  <div className={styles.customButtonGroup}>
    <div className={styles.buttonWrapper} onClick={previous}>
      <GalleryLeftArrowIcon />
    </div>
    <div className={styles.buttonWrapper} onClick={next}>
      <GalleryRightArrowIcon />
    </div>
  </div>
);

const PhotoGallery = () => (
  <Carousel
    partialVisible
    infinite
    responsive={responsive}
    customLeftArrow={<></>}
    customRightArrow={<></>}
    customButtonGroup={<CustomButtonGroupAsArrows />}
    renderButtonGroupOutside
  >
    {photos.map((photo: any) => (
      <div
        key={photo.id}
        className={styles.photoWrapper}
        style={{
          backgroundImage: `url(${photo.photo}`,
        }}
      />
    ))}
  </Carousel>
);

export default PhotoGallery;
