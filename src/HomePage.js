    // function HomePage(){
    //     const HandleClick = () =>{
    //         console.log("this is clicked" )
    //     }
    //     return(
    //         <div>
    //             <h3>This is HomePage</h3>
    //             <button onClick={HandleClick}>ClickMe</button>
    //             <h2>this is clicked {HandleClick}</h2>
    //         </div>
        
    //     )
    // }

    // export default HomePage;


    import React, { useState } from 'react';

    function HomePage() {
        const [clickCountPlus, setClickCountPlus] = useState(0);
        const[clickCountMinus,setClickCountMinus]=useState(0);
        const [ ResetCount,setResetCount] = useState(0);

        // const handleClickPlus = () => {

        //     setClickCountPlus(prevCount => prevCount + 1);
            
        // };
        // const ResetClick = () =>{
        //     setResetCount(0);
        // }
        // const handleClickMinus = () =>{
        //     setClickCountMinus(prevCount => prevCount -1)
        // }
        const [clickCount, setClickCount] = useState(0);
    const handleClickPlus = () => {
        setClickCount(prevCount => prevCount + 1);
    };

    const handleClickMinus = () => {
        setClickCount(prevCount => prevCount - 1);
    };

    const handleReset = () => {
        setClickCount(0);
    };

        

        return (
            // <div>
            //     <h3>This is HomePage</h3>
            //     <button onClick={handleClickPlus}>ClickMe</button>
            //     <h2>This button has been clicked {clickCountPlus} times.</h2>
            //     <button onClick={handleClickMinus}>Dont Click Me</button>
            //     <h2>I told dont click now reduced to {clickCountMinus} times.</h2>
            //     <button onClick={handleReset}>Reset Button</button>
            //     <h2>{ResetCount}</h2>
            // </div>
            <div>
            <h3>This is HomePage</h3>
            <button onClick={handleClickPlus}>ClickMe</button>
            <h2>This button has been clicked {clickCount} times.</h2>
            <button onClick={handleClickMinus}>Don't Click Me</button>
            <h2>I told don't click, now reduced to {clickCount} times.</h2>
            <button onClick={handleReset}>Reset Button</button>
        </div>
        );
    }

    export default HomePage;
