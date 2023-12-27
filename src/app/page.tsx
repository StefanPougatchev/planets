import { Nav } from '../components/nav/Nav';
import data from '../data/data.json';

export default function Home() {
  const planetNames = data.map((planet) => planet.name);
  return <Nav planetNames={planetNames} />;
}
