import {useContext} from "react";
import Card from "../UI/Card/Card";
import MenuItem from "../MenuItem/MenuItem";
import { CartContext } from "../../helper/cart-context";
import styles from "./menu.module.css";
import Button from "../UI/Button/Button";

// This component is dynamic and reused for both main menu + modal popup
// Additional, a different UI if cart is empty
function Menu({isModal, onOpenModal, ...props}){

    const ctx = useContext(CartContext);

    const onAddItem = (id, amount) => {
        ctx.addToCart(id, amount);
    }

    const onRemoveItem = (id) => {
        ctx.deleteFromCart(id);
    }

    const menuList = isModal ? ctx.cart.menuList.filter(each => each.numItems !== 0) : ctx.cart.menuList;
    const isCartEmpty = menuList.length === 0;

    const handleOrder = () => {
        alert("Purchased!");
        ctx.clearCart();
    }

    return(
        <Card {...props}>
            {/* Here, if modal, show only items in cart, if not-modal, show all items, if menuList is empty, show empty message*/}
            {
            isCartEmpty ?
            <h3>Let's get munchin'-munchin'!</h3>
            :
            menuList.map(each => (
                <MenuItem key={each.id} menuItem={each} onAddItem={onAddItem} onRemoveItem={onRemoveItem} isModal={isModal}/>
            ))
            }
            {/* Here, if modal, show the price footer */}
            {
                isModal && 
                <div className={styles.footer}>
                <div className={styles.totalPrice}>
                    <h3>Total Amount</h3>
                    <h3>$ {ctx.cart.totalCost.toFixed(2)}</h3>
                </div>
                <div className={styles.cta}>
                    <Button white onClick={() => onOpenModal(false)}>Cancel</Button>
                    <Button disabled={isCartEmpty} disableHover={isCartEmpty} onClick={handleOrder}>Order</Button>
                </div>
                </div>
            }
        </Card>
    )
}

export default Menu;