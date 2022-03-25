import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./menuitem.module.css";


function MenuItem({menuItem}){
    const { amount, setAmount } = useState(1);

    return(
        <div className={styles.menu}>
        <div className={styles.menuLhs}>
            <h3 className={styles.menuName}>{menuItem.name}</h3>
            <p className={styles.menuDescription}>{menuItem.description}</p>
            <h3 className={styles.menuPrice}>$ {menuItem.price}</h3>
        </div>
        <div className={styles.menuRhs}>
            <label htmlFor="amount" > Amount </label>
            <input type="number" value={amount}></input>
            <Button className={styles.button}>+ Add</Button>
        </div>
        </div>
    )
}

export default MenuItem;