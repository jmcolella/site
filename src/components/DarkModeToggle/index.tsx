import { useContext } from 'react';
import styles from './index.module.scss';
import { DarkModeContext,  } from '~/contexts/DarkMode';
import { DarkModeEnum } from '~/contexts/DarkMode/types';

function DarkModeToggle() {
  const { mode, toggleMode } = useContext(DarkModeContext);

  return (
    <div className={styles['toggle--container']}>
      <input id="dark-mode-toggle" className={styles['toggle--control']} type="checkbox" defaultChecked={mode === DarkModeEnum.LIGHT} />

      <label className={styles['toggle']} htmlFor="dark-mode-toggle" onClick={toggleMode}>
        <div className={styles['toggle--circle']}/>
      </label>
    </div>
  );
}

export default DarkModeToggle;