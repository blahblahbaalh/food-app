import { useRef } from "react";
import Button from "../UI/Button/Button";
import styles from "./menuitem.module.css";

// This component is reuseable across menu item + modal popup items;
// For popup items, they will have addition elements like + - button and total qty
// For menu items, they will have additional element like description
function MenuItem({ menuItem, onAddItem, onRemoveItem, isModal }) {
  const amountRef = useRef();

  const handleAdd = (e) => {
    e.preventDefault();
    const amount = amountRef.current ? amountRef.current.value : 1;
    onAddItem(menuItem.id, amount);
    if (amountRef.current) {
      amountRef.current.value = 0
    }
  };

  const handleRemove = () => {
    onRemoveItem(menuItem.id);

  };


  return (
    <form className={styles.menu} onSubmit={handleAdd}>
      <div className={styles.menuLhs}>
        <h3 className={styles.menuName}>{menuItem.name}</h3>
        {!isModal && (<h3 className={styles.menuName}>{menuItem.description}</h3>)}
        <h3 className={styles.menuPrice}>$ {menuItem.cost.toFixed(2)}</h3>
        {isModal && <div className={styles.box}>{menuItem.numItems}</div>}
      </div>
      {isModal ? (
        <div className={styles.menuRhs}>
          <button type="button" className={styles.box} onClick={handleAdd}>+</button>
          <button type="button" className={styles.box} onClick={handleRemove}>-</button>
        </div>
      ) : (
        <div className={styles.menuRhs}>
          <label htmlFor="amount"> Amount </label>
          <input type="number" ref={amountRef} min="0" max="100" placeholder="0"></input>
          <Button type="submit" className={styles.button} >+ Add</Button>
        </div>
      )}
    </form>
  );
}

export default MenuItem;
