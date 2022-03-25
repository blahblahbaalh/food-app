import styles from "./card.module.css";

function Card({children, className, ...props}){
    return(
        <div className={`${styles.card} ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Card;