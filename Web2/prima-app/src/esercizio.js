import React from 'react'

const Esercizioerczio = ()=> {
    const num=[1,2,3,4,5,6,7,8,9,10]
     return (
    <div>
        {num.map((i)=>{return <p> {i}</p>})}
    </div>
  )
}
export default Esercizio
 