import HomeAbout from '@/components/Other/Home/HomeAbout';
import HomeHero from '@/components/Other/Home/HomeHero';

const Home = () => {
  return (
    <main className='bg-black dark:bg-offwhite'>
      <HomeHero />
      <HomeAbout />
    </main>
  );
};

export default Home;
