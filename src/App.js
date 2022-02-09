import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setvalue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setvalue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log('I run all time');
  useEffect(() => {
    console.log('I run only once');
  }, []);
  useEffect(() => {
    if (keyword !== '' && keyword.length >= 5) {
      console.log('SEARCH FOR', keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here.."
      />

      <h1 className={styles.title}>Welcome back! counter : {counter}</h1>
      <button onClick={onClick}> button</button>
    </div>
  );
}

export default App;
