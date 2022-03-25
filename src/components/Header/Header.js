import Button from "../UI/Button/Button";
import styles from "./header.module.css"; //<-- ensure ur css import is LAST! so tt it will override the custom content css

function Header(){

    return(
        <div className={`${styles.header}`}>
        <h1 className={styles.logo}>ReactMeals</h1>
        <Button>Your Cart<Button className={styles.cartAmount}>2</Button></Button>
        </div>
    )
}

export default Header;