import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Advice.css"

// axios.get('https://api.adviceslip.com/advice')
//     .then(res => console.log(res))

function Advice(props) {

    const [advice, setAdvice] = useState("")


    const getAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(res => {
                console.log(res)
                setAdvice(res.data.slip.advice)
                //remove elementgit push

            })

        // document.createElement
    }

    useEffect(() => {
        getAdvice();

        // let res = await axios.get('https://api.adviceslip.com/advice')
        // console.log(res)

    }, [])


    return (
        <div className="adviceContainer" >
            <p>{advice}</p>
            <p><button onClick={getAdvice}>Get more advice</button></p>
        </div>
    );
}

export default Advice;