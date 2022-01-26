import React from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';

import styles from './Login.module.scss';

export const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};
