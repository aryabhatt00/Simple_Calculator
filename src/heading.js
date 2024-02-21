function Header(props){
  console.log(props);
    return <h1>Hello World {props.age} {props.name}</h1>;
    
  }
 export default Header;