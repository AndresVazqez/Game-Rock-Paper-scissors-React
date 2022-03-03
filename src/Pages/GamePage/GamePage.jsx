import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import Result from "../../Components/Result/Result";
import "./GamePage.scss";

const GamePage = () => {
    const [player, setPlayer] = useState({}); //Jugador Seleccionado
    const [players, setPlayers] = useState([]) //Jugadores Almacenados
    const [playerChoice, setPlayerChoice] = useState(); // Elección del Jugador en el juego
    const [machineChoice, setMachineChoice] = useState();//Elección de la máquina
    //En las elecciones del jugador y la máquina:
    // 0 === piedra, 1 === papel, 2 === Tijera
    const [winner, setWin] = useState(""); // Ganador 0 === draw, 1 === gana jugador, 2 === gana máquina
    const [isloading, setIsLoading] = useState(false); // Mientras se espera Resultado del juego

    //traemos Jugadores Almacenados y seteamos Variables de Estado.
    const getPlayer = () => {
        const players = JSON.parse(localStorage.getItem("players"));
        const player = JSON.parse(localStorage.getItem("player"));
        setPlayer(player);
        setPlayers(players)
    };

    // Selección del jugador (Piedra, Papel o Tijeras), seleccíon aleatoria de la máquina e inicio del juego. 
    const handleChoice = (e) => {
        setWin("")
        setIsLoading(true);
        const player = e;
        const numberMachine = Math.floor(Math.random() * (2 - 0 + 1) + 0);
        setMachineChoice(numberMachine);
        setPlayerChoice(player);
        setTimeout(() => {
            play(player, numberMachine);
            vibrar();
            setIsLoading(false)
        }, 1500)
    };

    //Función del Juego ejectutado en la función anterior y seteo del Ganador.
    const play = (playerChoice, machineChoice) => {

        if (machineChoice === playerChoice) {
            setWin(0);
        } else if (playerChoice === 0) {

            if (machineChoice === 1) {
                setWin(2);
            } if (machineChoice === 2) {
                setWin(1); setScorePlayer(1);
            }
        } else if (playerChoice === 1) {

            if (machineChoice === 0) {
                setWin(1); setScorePlayer(1);
            } if (machineChoice === 2) {
                setWin(2);
            }
        } else if (playerChoice === 2) {


            if (machineChoice === 0) {
                setWin(2);
            } if (machineChoice === 1) {
                setWin(1); setScorePlayer(1);
            }
        }
    };

    //Tenido el reultado del Juego, seteamos el puntaje al jugador.
    const setScorePlayer = (param) => {
        const arrayPlayers = players;
        const singlePlayer = player;
        arrayPlayers.map(item => item.name === player.name ? item.score = item.score + param : item.score)
        singlePlayer.score = player.score + param;
        localStorage.setItem("players", JSON.stringify(arrayPlayers));
        localStorage.setItem("player", JSON.stringify(singlePlayer));
    }

    const vibrar = () => {
        
        window.navigator.vibrate([500]);
    }


    useEffect(() => {
        getPlayer();

    }, []);

    return (

        <div className="gamepage">

            <div className="gamepage__score">
                <div>
                    <h1>{player.name}</h1>
                    <h2>{player.score}</h2>
                </div>
            </div>

            <div className="gamepage__choice" >

                <button className="gamepage__choice--img" onClick={(e) => handleChoice((e = 0))}>
                    <img src="https://i.ibb.co/HCY0rWs/piedraR.png" alt="closed hand " />
                </button>

                <button className="gamepage__choice--img" onClick={(e) => handleChoice((e = 1))}>
                    <img src="https://i.ibb.co/XZBBSnL/papelR.png" alt="paper hand" />
                </button>

                <button className="gamepage__choice--img" onClick={(e) => handleChoice((e = 2))}>
                    <img src="https://i.ibb.co/hCT2j08/TijeraR.png" alt="scissors hand" />
                </button>

                <button className="home">
                    <Link to={"/"}>
                        <img src="./assets/hogar.png" alt="home icon" />
                    </Link>
                </button>


            </div>
            <p>{winner === 0 ? "Draw" : winner === 1 ? "Player Win" : winner === 2 ? "Machine Win" : ""}</p>
            {isloading ? <Loading /> : playerChoice === undefined ? '' : <Result playerChoice={playerChoice} machineChoice={machineChoice} winner={winner} />}
            
        </div>
    );
};

export default GamePage;
