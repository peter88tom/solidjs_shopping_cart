import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Simple SolidJs App
        </p>
        
      </header>
    </div>
  );
}

export default App;
