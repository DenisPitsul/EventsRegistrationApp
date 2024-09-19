import React from 'react';
import styles from './Select.module.sass';

function Select ({ text, name, options, onSelect }) {
  return (
    <label className={styles.selectLabel}>
      <span className={styles.selectCaption}>{text}</span>
      <select onChange={onSelect} name={name}>
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
