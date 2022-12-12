import './App.css';
import { useEffect, useState } from 'react';
import ButtonGroup from './components/ButtonGroup';
import Quote from './components/Quote';

function App() {
  const [quote,setQuote] = useState('');
  useEffect(() => {
    getNewQuote();
  }, []);
  const getNewQuote = () => {
    setQuote({ quote});
    fetch('https://api.quotable.io/random').then(res => res.json())
      .then(quote => {
        setQuote(quote);
      })
  };
  return (
    <div className='container'>
      <ButtonGroup quote={quote} newQuote={getNewQuote}/>
      <Quote quote={quote}/>
    </div>
  );
}

export default App;
