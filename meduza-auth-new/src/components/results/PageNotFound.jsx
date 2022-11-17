import React from 'react';
import { Link } from 'react-router-dom';


import styles from './PageNotFound.module.css';

import Container from '@material-ui/core/Container';

const PageNotFound = (props, goBack) => {

  console.log('props = ', props);
  console.log('goBack = ', goBack);

  return (
    <Container className='container__form-img'
  >
    <div className={styles.pageNotFound}>

      <div className={styles.pageNotFoundInfo}>
        <h1 className={styles.pageNotFoundTitle}>404</h1>
        <h2 className={styles.pageNotFoundSubtitle}>Страница не найдена</h2>
      </div>

       <Link to='/' className={styles.pageNotFoundLink}>Назад</Link>
    </div>
    </Container>
  );
}

export default PageNotFound;
