// function Btn(){

//     // for click count
//     const clickHandler = () => console.log('click handler');
//     return(
       
//         <button onClick = {clickHandler}>
//             Click Me
//         </button>
//     )
// }

// export default Btn;

function Btn(){

    
    const clickHandler = () => console.log('click handler');
    return(
       
        <button onMouseOver = {clickHandler}>
            Click Me
        </button>
    )
}

export default Btn;