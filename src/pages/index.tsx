import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import PhotoGallery from '@/components/PhotoGallery';
import Products from '@/components/Products';

const Home: React.FC = () => (
  <MainLayout title="ООО СИБМАШ">
    <PhotoGallery />
    <Products />
  </MainLayout>
);

export default Home;
