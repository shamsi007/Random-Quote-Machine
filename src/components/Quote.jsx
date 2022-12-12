import '../App.css';
import React from 'react'

export default function Quote({quote,newQuote}) {
    return (
        <div className='row'>
            <h1>Random Quote Machine</h1>
            <div className='col-md-8' id='quote-box'>
            <p id='text'>{quote.content}</p>
            <p id='author'>{quote.author}</p>
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
