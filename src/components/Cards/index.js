import './styles.css'

const Cards = ({ chosenWizards }) => {
    return (<div className='showWizards'>
        {chosenWizards.map((wizard, index) => <ul className='wizardCard' key={index}
            style={{
                backgroundImage: `url(${wizard.image})`
            }}>
            <li>Nome: {wizard.name}</li>
            <li>Casa: {wizard.house}</li>
            <li>Descendência: {wizard.ancestry !== "" ? wizard.ancestry : "Não identificada"}</li>
        </ul>)}
    </div>)

}

export default Cards;