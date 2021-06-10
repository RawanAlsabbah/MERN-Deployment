import { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import PirateList from "../components/PirateList";
import styles from "../components/style.module.css";

const Home = (props) => {
    const [pirate, setPirate] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/pirate")
            .then((res) => {
                console.log("getting the stuff:", res);
                //   do something with res.data
                setPirate(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>

            <h1 className={styles.box1} >Pirate Crew</h1>
            <Link to="/new" ><button className={styles.but1} > Add Pirate </button> </Link>
            <PirateList pirate={pirate} setPirate={setPirate} />
        </>
    );
};

export default Home;