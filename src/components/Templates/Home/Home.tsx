import HomeAbout from '@/components/Other/Home/HomeAbout';
import HomeHero from '@/components/Other/Home/HomeHero';
import HomeWorks from '@/components/Other/Home/HomeWorks';

const Home = () => {
  return (
    <main className='bg-black dark:bg-offwhite overflow-hidden'>
      <HomeHero />
      <HomeAbout />
      <HomeWorks />
    </main>
  );
};

export default Home;
