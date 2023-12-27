import Link from 'next/link';
import styles from './nav.module.css';

interface NavProps {
  planetNames: string[];
}

export const Nav = ({ planetNames }: NavProps) => {
  return (
    <nav className={styles.navContainer}>
      <span className={styles.navHeading}>The Planets</span>
      <ul>
        {planetNames.map((planetName) => (
          <li key={planetName}>
            <Link href={`/${planetName}`}>{planetName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
