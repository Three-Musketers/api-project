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
    }, [])

    function randomize() {
        let randomNum = Math.floor(Math.random() * quotes.length)
        return (
            <div>

                <h1><p>"{quotes[randomNum]?.text}"</p></h1>
                <h3><p>- {quotes[randomNum]?.author}</p></h3>

            </div>
        )
    }



    return (
        <div className="quotesContainer">
            {randomize()}
            {/* {quotes?.map(eachQuote => {
                return (
                    <div>
                    <p>"{eachQuote.text}"</p>
                    <p>- {eachQuote.author}</p>
                    </div>
                )
            })} */}
        </div>
    );
}

export default Quotes;