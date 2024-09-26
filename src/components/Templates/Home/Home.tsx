import HomeAbout from '@/components/Other/Home/HomeAbout';
import HomeHero from '@/components/Other/Home/HomeHero';
import HomeMoreAbout from '@/components/Other/Home/HomeMoreAbout';

const Home = () => {
  return (
    <main className='bg-black dark:bg-offwhite overflow-hidden'>
      <HomeHero />
      <HomeAbout />
      <HomeMoreAbout />
    </main>
  );
};

export default Home;
