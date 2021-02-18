import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Quotes.css"


function Quotes(props) {

    let [quotes, setQuotes] = useState([])

    useEffect(() => {
        axios.get('https://type.fit/api/quotes')
            .then(res => {
                console.log(res)
                setQuotes(res.data.slice(0, 400))
            })
    })
    return (
        <div className="quotesContainer">
            {quotes?.map(eachQuote => {
                return (
                    <p>{eachQuote.text}</p>
                )
            })}
        </div>
    );
}

export default Quotes;