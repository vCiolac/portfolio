import { ChildrenInterface } from '@/interfaces/ChildrenInterface';
import Footer from '../Other/Footer/Footer';
import Header from '../Other/Header/Header';
import Transition from '../Other/Transition/Transition';

const Layout = ({ children }: ChildrenInterface) => {
  
  return (
    <Transition>
      <Header />
      {children}
      <Footer />
    </Transition>
  );
};

export default Layout;
