import styles from './index.module.scss';
import DarkModeToggle from '~/components/DarkModeToggle';
import snowyLandscape from '~/assets/images/snow-landscape.jpg';
import Link from '~/components/actions/Link';
import { LinkVariant } from '~/components/actions/types';
import data from '~/data';

function Home() {
  return (
    <>
      <header className={styles['header']}>
        <h1 className={styles['header-title']}>{data.title}</h1>
      </header>

      <main className={styles['main']}>
        <div className={styles['img-container']}>
          <img className={styles['img']} src={snowyLandscape} alt="Main image of peaceful nature" />
        </div>

        <div className={styles['link-container']}>
          <Link href={data.links.linkedIn} target='_blank' variant={LinkVariant.BUTTON_PRIMARY}>Learn more</Link>
        </div>
      </main>

      <footer className={styles['footer']}>
        <DarkModeToggle />
      </footer>
    </>
  );
}

export default Home;