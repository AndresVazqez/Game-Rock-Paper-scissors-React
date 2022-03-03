import React from 'react';
import './Result.scss';

const Result = (props) => {

    const { machineChoice, playerChoice, winner } = props;
    //imagenes de la selección del jugador
    const rockL = <img src="https://i.ibb.co/GQNPLVc/piedral.png" alt="rock hand" />
    const paperL = <img src="https://i.ibb.co/GddV1xj/papelL.png" alt="paper hand" />
    const scissorsL = <img src="https://i.ibb.co/G3TSTyQ/TijeraL.png" alt="scissors hand" />
    //imagenes de la selección de la máquina
    const rockR = <img src="https://i.ibb.co/HCY0rWs/piedraR.png" alt="rock hand" />
    const paperlR = <img src="https://i.ibb.co/XZBBSnL/papelR.png" alt="paper hand" />
    const scissorsR = <img src="https://i.ibb.co/hCT2j08/TijeraR.png" alt="scissors hand" />


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