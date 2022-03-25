import "./global.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Modal from "./components/UI/Modal/Modal";

/**
 * This is the main component page containing Header(navbar), banner, menu item list, and modal
 * This component showcase example of inline CSS + dynamic
 * 
 */
function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const onOpenModal = (isOpen = false) => {
    setIsModalOpen(isOpen);
  }
  
  return (
    <div style={{overflowY: isModalOpen && "hidden", maxHeight: isModalOpen && "100vh"}}>
    <Header onOpenModal={onOpenModal}/>
    <Banner />
    <Menu isModal={false} style={{margin: "auto", marginBottom: "100px"}}/>
    { 
    isModalOpen && 
    <Modal>
      <Menu isModal={true} onOpenModal={onOpenModal}/>
    </Modal>
    }
    </div>
  );
}

export default App;
