// function Promo(props) {

//     const styles = {
//         color: "tomato",
//         fontSize: "40px"
//     }
    
//     return (
//             <div className="promo-section">
//                 <div>
//                     <h1 style={styles}>
//                         {props.heading}
//                     </h1>
//                 </div>
//                 <div>
//                     <h2>{props.promoSubHeading}</h2>
//                 </div>
//             </div>
//         );
//     }

// export default Promo;






function PromoHeading(){
    const props= {
        heading:"99% sale",
        callToAction:"All must go"
    }
    return (
        <div>
            <h1>{props.heading}</h1>
        <h2>{props.callToAction}</h2>
        </div>
    )
}
export default PromoHeading; 