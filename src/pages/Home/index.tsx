import styles from './index.module.scss';

function Home() {
  return (
    <h1 className={styles['home--heading__color']}>Hello world, I'm John Colella</h1>
  );
}

export default Home;