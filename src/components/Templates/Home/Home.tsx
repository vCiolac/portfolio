import HomeAbout from '@/components/Other/Home/HomeAbout';
import HomeContact from '@/components/Other/Home/HomeContact';
import HomeHero from '@/components/Other/Home/HomeHero';
import HomeProject from '@/components/Other/Home/HomeProject';
import HomeWorks from '@/components/Other/Home/HomeWorks';

const Home = () => {
  return (
    <section className='bg-black dark:bg-offwhite overflow-hidden'>
      <HomeHero />
      <HomeAbout />
      <HomeWorks />
      <HomeProject />
      <HomeContact />
    </section>
  );
};

export default Home;
