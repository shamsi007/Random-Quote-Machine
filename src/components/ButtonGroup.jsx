import '../App.css';
import React from 'react'

export default function ButtonGroup({newQuote,quote}) {
  return (
    <div className='row'>
    <div className='col-md-8 col-md-offset-2'>
      <h1>Random Quote Machine</h1>
      <div className='btn-group btn-group-justified'>
        <div className='btn-group'>
          <a className='btn' id='new-quote'
            onClick={newQuote}
          >New Quote</a>
        </div>
        <div className='btn-group'>
          <a 
            className='btn' id='tweet-quote' 
            href={'https://twitter.com/intent/tweet?text=' + quote.content + ' - ' + quote.author} 
            target='_blank'
          >
            Tweet Quote
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
