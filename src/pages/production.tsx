import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ProdTabs from '@/components/ProdTabs';

const Home: React.FC = () => (
  <MainLayout title="ООО СИБМАШ">
    <ProdTabs />
  </MainLayout>
);

export default Home;
