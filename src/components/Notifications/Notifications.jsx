import React from 'react';
import css from './Notifications.module.css'

export const Notification = ({ message }) => <p className={css.message}>{message}</p>;
