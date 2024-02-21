import logo from './logo.svg';
import './App.css';
import Btn from "./btn.js"
import Header from "./heading.js";
import Pears from "./pears.js"
import Apples from "./apples.js";
// import Promo from "./promo.js"
import sample from "./sample.png"
import Bag from "./bags.js";
import React, { Children } from 'react';
import MealState from './Mealstate.js';
import PromoHeading from './promo.js'
import ModeToggler from './ModeToggler.js';
import Child from './Child.js'
import Counter from './Counter.js';
import MealsList from './MealsList.js'
import MealsProvider from './MealsProvider.js';
import HomePage from './HomePage'
import {Routes,Route,Link} from 'react-router-dom';
import ResultComponent from './ResultComponent.js';
import AboutMe from './AboutMe';
import  { Component } from 'react';
import Search from './searchFunction.js';
import SimpleCalculator from './simpleCalculator.js';
// // function Header(){
  
// //   return <h1>Hello World</h1>;
  
// // }
// function Logo(props){
//   const userPic = <img src={sample} />
//     return userPic;
// }
// function App() {
  
//   return ( 
// //   <div>
// // <Logo />
// // <Header children="helo" />
// // <Bag children={<Apples color="red" number="5" />} />
// // <Promo />
// // <Bag>
// //         <Apples color="yellow" number="5" />
// //         <Pears friend="Peter" />
// //     </Bag>  

//   // </div>

// //********************************************************************************************8 */

//   // for button 

//   // <div>
//   //   <Btn />
//   // </div>

//   <div>
//     <ModeToggler />
//   </div>

          
//   );
  
// }

// export default App;




// function App() {
//   function handleClick() { 
//      let randomNum = Math.floor(Math.random() * 3) + 1;
//      console.log(randomNum);
//      let userInput = prompt('type a number'); 
//      alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//    }
//    return (
//      <div>
//        <h1>Task: Add a button and handle a click event</h1>
//        <button onClick={ handleClick}>Guess a number between 1 and 3</button>
//      </div>
//    );
//  
// }



// function App(){
//   const date = new Date()

// return(<div>
//   <Child message={date.toLocaleTimeString()}/>

// </div>
  
// )
// const { meals, setMeals } = MealState();
// return (
//   <div>
//             <h1>Today's Meals</h1>
//             <ul>
//                 {meals.map(meal => (
//                     <li key={meal.id}>
//                         {meal.name} - {meal.calories} calories
//                     </li>
//                 ))}
//             </ul>
//             <Counter />
//         </div>
// )
// return(
//     <div>
//         <MealsProvider>
//             <MealsList />
//             <Counter />
//         </MealsProvider>
//     </div>
// )
// return(
    // <div className='App'>
    //     <nav className="nav">
    //         <Link to='/' className="nav-items"> HomePage</Link>
          
    //         <Link to='/about-me' className="nav-items"> AboutMe</Link>
    //     </nav>
    //     <Routes>
    //     <Route path="/" element ={<HomePage />}/>
    // <Route path="/about-me" element ={<AboutMe />}/>
        
    //     </Routes>
   
    // </div>
  
// )
class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
           
            this.setState({
                
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <SimpleCalculator onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;

  
