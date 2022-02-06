import React from 'react';
import styles from './acheivements.module.css'

const Acheivements = () => {
  return <div className={styles.container} id="ace">
      <div class={styles.title}>
        <h1>Acheivements</h1>
    </div>

    <div className={styles.acheivements}>
        <div className={styles.flex}>
            <i class="fas fa-chevron-right"></i>
            &nbsp;<h3>Qualified in Jee Mains With a Rank of 11k Under EWS Category.</h3>
        </div>
        <div className={styles.flex}>
            <i class="fas fa-chevron-right"></i>
            &nbsp;<h3>Solved 250+ problems on Leetcode</h3>
        </div>
    </div>
  </div>;
};

export default Acheivements;
