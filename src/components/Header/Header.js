import { useContext } from "react";
import { CartContext } from "../../helper/cart-context";
import Button from "../UI/Button/Button";
import styles from "./header.module.css"; //<-- ensure ur css import is LAST! so tt it will override the custom content css

/**
 * Simple navbar component with cta button that showcase the total num of items in cart. Clicking on button will toggle the popup
 */
function Header({onOpenModal}){

    const ctx = useContext(CartContext)

    return(
        <div className={`${styles.header}`}>
        <h1 className={styles.logo}>Munchin'</h1>
        <Button onClick={() => onOpenModal(true)}>
            Your Cart
        <Button disableHover={true} className={styles.cartAmount}>{ctx.cart.totalNumItems}</Button>
        </Button>
        </div>
    )
}

export default Header;