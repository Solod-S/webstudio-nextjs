import homePagecomponents from './components/homePage';
import sharedPageComponents from './components/shared';

const { Features, Hero, KindOfActivity, OurTeam } = homePagecomponents;
const { RegularClients } = sharedPageComponents;

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
