import React from 'react';
import css from './Section.module.css'

export const Section = ({ title, children }) => (
  <div>
    <h1 className={css.title}>{title}</h1>
    {children}
  </div>
);

