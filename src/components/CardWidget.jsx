import carrito from "../assets/img/carrito.svg"

const CardWidget = () => {
    return ( <>
    <div className=" flex">
        <img src={carrito} alt="carrito" />
        <samp> (10)</samp>
    </div>
    </> );
}
 
export default CardWidget;