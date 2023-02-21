import styles from './app.module.scss';
import {Common} from "@notes-poc/common";

export function App() {
  return (
    <div className={styles.container}>
      <h1>Store front</h1>
      <hr />
      <Common />
      <div />
    </div>
  );
}

export default App;
