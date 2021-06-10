import DeleteButton from "../components/DeleteButton";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import styles from "./style.module.css";

const PirateList = ({ pirate, setPirate }) => {
    const removeFromDom = (id) => {
      setPirate(pirate.filter((_item, i) => i !== id));

            axios
            .get("http://localhost:8000/pirate")
            .then((res) => {
                console.log("getting the stuff:", res);
                //   do something with res.data
                setPirate(res.data);
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
          {pirate.length > 0 &&   pirate.sort((a, b) => a.name.localeCompare(b.name)).map((item, i) =>
          {
              return (
                <div className={styles.box2} vkey={item._id}>
                  <h3> {item.name}</h3>
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    style={{ width: "200px"},{height:"250px"}}
                  />
                  <Link to={`/edit/${item._id}`}><button className={styles.but1}> View Pirate</button></Link>
                  <DeleteButton 
                    id={item._id}
                    successCallBack={() => removeFromDom(item._id)}
                  />
                </div>
              );
            })}
        </>
      );
    };

export default PirateList;

