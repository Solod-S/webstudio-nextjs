import components from './components/homePage';

const { Features, Hero, KindOfActivity, OurTeam, RegularClients } = components;

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <KindOfActivity />
      <OurTeam />
      <RegularClients />
    </>
  );
}
