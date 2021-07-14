import { useState, useEffect } from "react";
import Cards from "../Cards";
import './styles.css'

const Students = () => {
    const [wizards, setWizards] = useState([]);
    const [chosenWizards, setChosenWizards] = useState([])

    useEffect(() => {
        fetch('https://hp-api.herokuapp.com/api/characters/students')
            .then((response) => response.json())
            .then((response) => setWizards(response))
    }, [])

    const selectWizard = () => {
        let num = []
        let aux = Math.floor(Math.random() * (11 - 0)) + 0

        for (let index = 0; index < 3; index++) {

            num.push(wizards[aux])
            while (num.includes(wizards[aux])) {
                aux = Math.floor(Math.random() * (11 - 0)) + 0
            }
            while (num.filter(function (e) { return e.house === wizards[aux].house; }).length > 0) {
                aux = Math.floor(Math.random() * (11 - 0)) + 0
            }
        }
        setChosenWizards([...num]);
    }

    return (<div>

        <Cards chosenWizards={chosenWizards} />
        <button onClick={() => selectWizard()}>Escolher Bruxos!</button>

    </div >)
}

export default Students;