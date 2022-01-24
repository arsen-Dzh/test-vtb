import React from 'react';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { useHistory }  from 'react-router-dom';
import {
   Button
  } from '@material-ui/core/';
import styles from './LoginForm.module.scss';
import { AUTH } from '../../redux/actions/userAction';


export const LoginForm: React.FC = () => {

  let history = useHistory()

  const dispatch = useDispatch();
  
  const authHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
    dispatch({type: AUTH})
    history.push('/new')
  }

  return (
    <form onSubmit={authHandler} className={styles.loginForm}>
      <NumberFormat format="+# (###) ###-##-##" mask="X" placeholder='Phone' />
      <input type="password" placeholder='Password'/>
      <Button variant="contained" color="primary" type='submit'>
        Войти
      </Button>
    </form>
  );
};
