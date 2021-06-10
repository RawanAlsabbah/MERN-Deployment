import { Link } from "@reach/router";
import styles from "../components/style.module.css";

const PirateForm = ({
    formInputs,
    changeFunction,
    submitFunction,
}) => {



    return (
        <>
            <form onSubmit={submitFunction}>
                <div className={styles.form1}>  
                <p>
                    Pirate Name:{" "}
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={formInputs.name}
                        onChange={changeFunction}
                    />
                </p>

                <p>
                imgUrl:{" "}
                <br />
                    <input
                        type="text"
                        name="imgUrl"
                        value={formInputs.imgUrl}
                        onChange={changeFunction}
                    />
                </p>
                <p>
                    # of Treasur Chests {" "}
                    <br />
                    <input
                        type="number"
                        name="treasurChests"
                        value={formInputs.treasurChests}
                        onChange={changeFunction}
                    />
                </p>
                <p>
                    # pirate Catch phrases {" "}
                    <br />
                    <input
                        type="test"
                        name="catchPhrases"
                        value={formInputs.catchPhrases}
                        onChange={changeFunction}
                    />
                </p>
                </div>
                <div className={styles.form2}>
                <p>
                    Crew Position
                    <br />
            <select value={formInputs.position} name="position" onChange={changeFunction}>
                        <option selected value="Captin">Captin</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </p>

                <p>
                    Peg Leg :
            <input
                        type="checkbox"
                        name="pegLeg"
                        checked={formInputs.checked}
                        value={formInputs.pegLeg}
                        onChange={changeFunction}
                        defaultChecked={formInputs.pegLeg}
                    />

                </p>

                <p>
                    Eye Patch:
            <input
                        type="checkbox"
                        name="eyePatch"
                        checked={formInputs.checked}
                        value={formInputs.eyePatch}
                        onChange={changeFunction}
                        defaultChecked={formInputs.eyePatch}

                    />

                </p>

                <p>
                    Hook Hand:
            <input
                        type="checkbox"
                        name="hookHand"
                        checked={formInputs.checked}
                        value={formInputs.hookHand}
                        onChange={changeFunction}
                        defaultChecked={formInputs.hookHand}

                    />

                </p>

                <button  className={styles.but1} type="submit">Add Pirate</button>
                </div>
            </form>
        </>
    );
};

export default PirateForm;