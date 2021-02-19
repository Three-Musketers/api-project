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
            })
    }

    useEffect(() => {
        getAdvice();

        // let res = await axios.get('https://api.adviceslip.com/advice')
        // console.log(res)

    }, [])


    return (
<<<<<<< HEAD
        <div className="adviceContainer" >
            {advice}
            <button onClick={getAdvice}>Get more advice</button>
=======
        <div className= "adviceContainer">

            <p>{advice}</p>
            
>>>>>>> 11d123a519abf23401f0255e628ee8280c7f0162
        </div>
    );
}

export default Advice;