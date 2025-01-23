import React, { useState } from 'react'

const Clicker = ({ value })=> {

    const [num, setNum] = useState(value)

    return(<button className = 'btn'
    onClick={()=> {setNum(num+1)}}>Clicker{num}</button>
    )
}

export default Clicker
