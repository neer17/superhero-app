import * as React from 'react';

import styles from './Card.module.scss'

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div className={styles.cardRoot}>
        
      </div>
    );
  }
}
