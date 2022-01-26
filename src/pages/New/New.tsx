import React from 'react';
import { NewEnityForm } from '../../components/NewEnityForm/NewEnityForm';
import styles from '../Login/Login.module.scss'


export const New = () => {
  return (
    <div className={styles.container}>
      <NewEnityForm />
    </div>
  );
};
