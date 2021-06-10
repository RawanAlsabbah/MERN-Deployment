import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../components/style.module.css";
import { Link } from "@reach/router";

const View = ({ id }) => {
    const [pirate, setPirate] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/pirate/${id}`)
            .then((res) => {
                console.log("getting the stuff:", res);
                setPirate(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <>

            <h1 className={styles.box1} >{pirate.name}</h1>

            <div className={styles.box4} >
                <img
                    src={pirate.imgUrl}
                    alt={pirate.name}
                    style={{ width: "300px" }}
                />
                <h1> "{pirate.catchPhrases} " </h1>
            </div>
            <div className={styles.box3}  >
                <h1> About </h1>
                <p>
                    position :  {pirate.position}
                </p>

                <p>
                    Treasures :    {pirate.treasurChests}
                </p>
                <p>Peg Leg: {pirate.pegLeg ? "Yes" : "No"}</p>
                <p>Eye Patch: {pirate.eyePatch ? "Yes" : "No"}</p>
                <p>Hook Hand: {pirate.hookHand ? "Yes" : "No"}</p>
            </div>
            <br />
            <br />

            <Link to="/" > <button className={styles.but1}>   Crew Board  </button> </Link>

        </>
    );


};

export default View;