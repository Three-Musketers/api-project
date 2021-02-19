import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
        <div>

            <p>{jokes.setup}</p>
            <p>{jokes.punchline}</p>

        </div>
    );
}

export default Jokes;