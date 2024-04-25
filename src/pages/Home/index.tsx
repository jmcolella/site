import styles from './index.module.scss';
import DarkModeToggle from '~/components/DarkModeToggle';

function Home() {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header--title-primary']}>John Colella</h1>

      <DarkModeToggle />
    </header>
  );
}

export default Home;