import '../App.css';
import React from 'react'

export default function Quote({quote}) {
    return (
        <div className='row'>
            <div className='col-md-8' id='quote-box'>
            <p id='text'>{quote.content}</p>
            <p id='author'>{quote.author}</p>
            </div>
        </div>
    )
}
