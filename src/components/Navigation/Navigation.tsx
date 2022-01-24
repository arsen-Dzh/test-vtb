import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { AUTH } from '../../redux/actions/userAction';
import { Button } from '@material-ui/core';

import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {

  const dispatch = useDispatch();

  const history = useHistory();

  const logoutHandler = () => {
    dispatch({type: AUTH})
    history.push('/')
  }

  return (
    <div className={styles.navbar}>
      <div>
        <NavLink to='/new'>Создать новый</NavLink>
        <NavLink to='/dashboard'>Дешборд</NavLink>
        <NavLink to='/listing'>Листинг</NavLink>
      </div>
      <Button variant="contained" color="secondary" onClick={logoutHandler}>Выйти</Button>
    </div>
  )
};

