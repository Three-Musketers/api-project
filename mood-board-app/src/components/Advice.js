import React, { useEffect, useState } from 'react';
import axios from 'axios';

// axios.get('https://api.adviceslip.com/advice')
//     .then(res => console.log(res))

function Advice(props) {

    const [advice, setAdvice] = useState("")

    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice')
            .then(res => {
                console.log(res)
                setAdvice(res.data.slip.advice)
            })

        // let res = await axios.get('https://api.adviceslip.com/advice')
        // console.log(res)

    }, [])


    return (
        <div className= "adviceContainer">

            <p>{advice}</p>
            
        </div>
    );
}

export default Advice;