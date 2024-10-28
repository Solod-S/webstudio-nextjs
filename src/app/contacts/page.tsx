import contactsPageComponents from '../components/contactsPage';
import sharedPageComponents from '../components/shared';

const { Hero, Schedule } = contactsPageComponents;
const { RegularClients } = sharedPageComponents;

export default function Home() {
  return (
    <>
      <Hero />
      <Schedule />
      <RegularClients />
    </>
  );
}
