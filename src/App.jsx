import styles from './App.module.css';
import Schedule from './Schedule.jsx';
import Counter from './Counter';

function App() {
  return (
    <div class={styles.App}>
      <h1>SolidJS App</h1>
      <Counter />
      <Schedule />
    </div>
  );
}

export default App;
