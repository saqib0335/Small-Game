import React,{ useState , useEffect} from 'react'

const Counter = () => {
    // const [count, setCount] = useState(0);

    // function increment (){
    //     setCount(prev => prev + 1)
    // }
    // function decrement (){
    //     setCount(prev => prev - 1)
    // }
    //          const [watch , setwatch] = useState({
    //             brand: "rolex",
    //             year: 2010,
    //             color: 'red',
    //          })
    //  function watchingbrand (){
    //     setwatch(prev => {
    //         return {... prev, color: 'blue'}
    //     })

    //  }
        const [count, setCount] = useState(0)
     useEffect(() =>{
        setTimeout(() =>{
            setCount(prev => prev + 1)
        },1500)
     })

  return (
    <div className='first'>
        {/* <p className='second'>Count: {count}</p>  
      <button onClick={increment} className='three'>+</button>
      <button onClick={decrement} className='three'>-</button> */}<h3>the count is updated in every {}</h3>
      {/* <h1> my {watch.brand} watch</h1>
      <p>I have watch of {watch.brand} which came in the {watch.year} and the color {watch.color}</p>
      <button onClick={watchingbrand}>change it</button> */}
    </div>
  )
}

export default Counter
