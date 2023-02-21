import styles from './common.module.scss';

/* eslint-disable-next-line */
export interface CommonProps {
  name: string;
}

export function Common(props: CommonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome, {props.name} !</h1>
    </div>
  );
}

export default Common;
