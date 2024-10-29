'use client';

import { useState } from 'react';
import homePagecomponents from './components/homePage';
import sharedPageComponents from './components/shared';

const { Features, Hero, KindOfActivity, OurTeam } = homePagecomponents;
const { RegularClients, PlaceOrderForm } = sharedPageComponents;

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <PlaceOrderForm
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
      <Hero openModal={() => setIsModalOpen(true)} />
      <Features />
      <KindOfActivity />
      <OurTeam />
      <RegularClients />
    </>
  );
}
