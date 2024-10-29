'use client';

import { useState } from 'react';
import contactsPageComponents from '../components/contactsPage';
import sharedPageComponents from '../components/shared';

const { Hero, Schedule } = contactsPageComponents;
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
      <Schedule />
      <RegularClients />
    </>
  );
}
