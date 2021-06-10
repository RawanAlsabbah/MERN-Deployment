import axios from "axios";
import { navigate } from "@reach/router";
import styles from "../components/style.module.css";

const DeleteButton = ({ id, successCallBack }) => {
  const clickFunction = (id) => {
    axios
      .delete(`http://localhost:8000/pirate/${id}`)
      .then((res) => {
        // do something after delete
        console.log(res);
        successCallBack();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button  className={styles.but2} onClick={() => clickFunction(id)}>Walk the plank</button>
    </>
  );
};

export default DeleteButton;