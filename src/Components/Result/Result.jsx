import React from 'react';
import './Result.scss';

const Result = (props) => {

    const { machineChoice, playerChoice, winner } = props;
    //imagenes de la selección del jugador
    const rockL = <img src="./assets/piedraL.png" alt="rock hand" />
    const paperL = <img src="./assets/papelL.png" alt="paper hand" />
    const scissorsL = <img src="./assets/TijeraL.png" alt="scissors hand" />
    //imagenes de la selección de la máquina
    const rockR = <img src="./assets/piedraR.png" alt="rock hand" />
    const paperlR = <img src="./assets/papelR.png" alt="paper hand" />
    const scissorsR = <img src="./assets/tijeraR.png" alt="scissors hand" />


    return (
        <div className='c-retult'>
            <div className='c-retult__result'>
                <div className='c-retult__result--player'>
                    {playerChoice === 0 ? rockL : playerChoice === 1 ? paperL : playerChoice === 2 ? scissorsL : ""}
                </div>
                <div className='c-retult__result--machine'>
                    {machineChoice === 0 ? rockR: machineChoice === 1 ? paperlR : machineChoice === 2 ? scissorsR : ''}
                </div>
            </div>           
        </div>
    )
}

export default Result