import Card from "../UI/Card/Card";
import styles from "./banner.module.css";

function Banner(){

    return(
        <div className={styles.banner}>
        <img className={styles.img} src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="react-food-banner" />
        <Card className={styles.card}>
            <h1>Delicious Food, Delivered to You</h1>
            <p>Choose your favourite meal from a broad selection of available meals, and enjoy a delicious lunch or dinner at home. 
                <br/>
                <br/>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </Card>
        </div>
    )
}

export default Banner