import "./CartItem.scss";
import { useContext } from "react";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import Product from "../../Products/Product/Product";
const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);


    return <div className="cart-products">
    {cartItems&&cartItems.map(item =>(

        <div key={item.id} className="cart-product">
            <div className="img-container">
                <img src={"http://localhost:1337"+item.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)}/>
                <div className="quantity-buttons">
                    <span onClick={()=>handleCartProductQuantity('dec',item)}>-</span>
                    <span>{item.attributes.quantity}</span>
                    <span onClick={()=>handleCartProductQuantity('inc',item)}>+</span>
                </div>
                <div className="text">
                    <span>{item.attributes.quantity}</span>
                    <span>X</span>
                    <span className="highlight">&#8377;{item.attributes.price*item.attributes.quantity}</span>
                </div>
            </div>
        </div>
    ))}
            
    </div>;
};

export default CartItem;
