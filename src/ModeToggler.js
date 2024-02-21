function ModeToggler(){

    let darkModeOn = true;
    const darkMode = <h1>Dark Mode</h1>;
    const lightMode = <h1>Light mode</h1>;
    // const clickHandler = () => console.log('click handler');
    function handleClick(){
        darkModeOn = !darkModeOn;
        if (darkModeOn==true){
            console.log('Dark Mode')
        }
        else{
            console.log("Light Mode")
        }
    }
    return (
       <div>
         {darkModeOn ? darkMode : lightMode}
         <button onClick = {handleClick}>Click me</button>
       </div>
    )
}

export default ModeToggler;