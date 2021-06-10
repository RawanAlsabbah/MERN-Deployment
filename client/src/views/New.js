import axios from "axios";
import { navigate } from "@reach/router";
import { useState } from "react";
import PirateForm from "../components/PirateForm";
import { Link } from "@reach/router";
import styles from "../components/style.module.css";

const New = (props) => {
    const [formInputs, setFormInputs] = useState({
        name: '',
        imgUrl: '',
        treasurChests: 0,
        catchPhrases: '',
        position: 'Captin',
        pegLeg: true,
        eyePatch: true,
        hookHand: true,
    });
    const [errors, setErrors] = useState([]);
    const [nameError, setNameError] = useState("");

    const submitFunction = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/pirate", formInputs)
            .then((res) => {
                console.log("sending res:", res);
                navigate(`/edit/${res.data._id}`);
            })
            .catch((err) => {
                console.log("ERROR ", err.response.data.errors)
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                console.log("array ", errorArr)
                setErrors(errorArr);
            });
    };

    const changeFunction = (e) => {
        console.log("e.target.name", e.target.name);
        if (e.target.value.length < 3) {
            setNameError(e.target.name + " must be 3 characters or longer!");
        }
        else {
            setNameError("");
        }
        console.log("e.target.value", e.target.value);
        if (e.target.name === "pegLeg") {
            console.log("e.target.checked", e.target.checked);
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.checked,
            });
        } else {
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.value,
            });
        }
        if (e.target.name === "eyePatch") {
            console.log("e.target.checked", e.target.checked);
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.checked,
            });
        } else {
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.value,
            });
        }
        if (e.target.name === "hookHand") {
            console.log("e.target.checked", e.target.checked);
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.checked,
            });
        } else {
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.value,
            });
        }


    }

    return (
        <>
            <h1 className={styles.box1} >Add Pirate </h1>

            <Link to="/" > <button className={styles.but1}>   Crew Board  </button> </Link>

            { errors.length > 0 && errors.map((err, id) => {
                return <p key={id}>{err} </p>

            })}

            <PirateForm
                formInputs={formInputs}
                changeFunction={changeFunction}
                submitFunction={submitFunction}
            />
            {nameError ? <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>{nameError}</p> : ""}

        </>
    );

};

export default New;