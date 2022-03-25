import Card from "../UI/Card/Card";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./menu.module.css";

function Menu(){
    const menuList = [
        {
            id: Date.now(),
            name: "Sushi",
            description: "OISHI! Finest fish and vegetables",
            price: 22.99
        },
        {
            id: Date.now(),
            name: "Schnitzel",
            description: "Sensei's food. A german's specialty!",
            price: 16.50
        },
        {
            id: Date.now(),
            name: "Barbeque Burger",
            description: "I DONT LIKE BURGERS",
            price: 0.10
        }
    ]
    return(
        <div className="container">
        <Card>{
            menuList.map(each => (
                <MenuItem key={each.id} menuItem={each} />
            ))
            }</Card>
        </div>
    )
}

export default Menu;