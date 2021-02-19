import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Jokes.css"


function Jokes(props) {
    const [jokes, setJokes] = useState("")

    useEffect(() => {
        axios.get('https://official-joke-api.appspot.com/jokes/random')
            .then(res => {
                console.log(res.data)
                setJokes(res.data)
            })

        // let res = await axios.get('https://api.adviceslip.com/advice')
        // console.log(res)

    }, [])

    return (
        <div className= "jokesContainer">

            <h1><p>Q: {jokes.setup}</p></h1>
            <h3><p>{jokes.punchline}</p></h3>

        </div>
    );
}

export default Jokes;