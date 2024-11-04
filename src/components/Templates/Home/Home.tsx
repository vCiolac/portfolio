import HomeAbout from '@/components/Other/Home/HomeAbout';
import HomeContact from '@/components/Other/Home/HomeContact';
import HomeHero from '@/components/Other/Home/HomeHero';
import HomeProject from '@/components/Other/Home/HomeProject';
import HomeWorks from '@/components/Other/Home/HomeWorks';
import ScrollingLogos from '@/components/Other/ScrollingLogos/ScrollingLogos';

const Home = () => {
  return (
    <section className='bg-black dark:bg-offwhite overflow-hidden'>
      <HomeHero />
      <HomeAbout />
      <HomeWorks />
      <HomeProject />
      <HomeContact />
      <ScrollingLogos />
    </section>
  );
};

export default Home;
