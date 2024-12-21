import { AiOutlineShoppingCart } from 'react-icons/ai';
import Hero from './components/Hero';
import Popular from './components/Popular';
import Explore from './components/Explore';

export default function Home() {
  return (
    <div className="m-0">
      <Hero />
      <Popular />
      <Explore />
    </div>
  );
}
