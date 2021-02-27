import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';
import React from 'react';

const plan = () => (
  <MainLayout title="Чертежи">
    <div className="plan">
      <Link href="pokovka_flanec">Фланец (поковка)</Link>
      <Link href="pokovka_ring">Кольцо (поковка)</Link>
      <Link href="pokovka_disk">Диск (поковка)</Link>
    </div>
  </MainLayout>
);

export default plan;
