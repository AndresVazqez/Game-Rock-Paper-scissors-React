import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./HomePage.scss";
import Footer from "../../Components/Footer/Footer";

const HomePages = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [update, setUpdate] = useState(false);
  const totalPlayer = JSON.parse(localStorage.getItem("players"));

  const getRegister = (e) => {

    const prevPlayers = JSON.parse(localStorage.getItem("players"));

    let player;

    if (e.name) {

      player = {
        name: e.name,
        score: 0
      }

      const coincidence = prevPlayers ? prevPlayers.find(player => player.name === e.name) : "";


      if (coincidence) {

        localStorage.setItem("player", JSON.stringify(coincidence));

      }

      else if (!coincidence) {

        localStorage.setItem("player", JSON.stringify(player));


        if (totalPlayer === null) {

          localStorage.setItem("players", JSON.stringify([player]));
          setUpdate(!update)
          setError(false)

        } else {

          totalPlayer.push(player);
          localStorage.setItem("players", JSON.stringify(totalPlayer));
          setError(false)

        }
      }

      navigate("/game");
    } else {
      setError(true)
    }
  };

  return (
    <div className="homepage">
      
      <div className="homepage__title">
      <h1>Hola, ¡Bienvenido al juego de Piedra Papel o tijeras!</h1>
      </div>
      

      <h4>¡Dinos tu nombre para empezar a jugar!</h4>

      <form className="homepage__form" onSubmit={handleSubmit(getRegister)}>
        <input className="homepage__form--input"
          name="name" type="text"
          placeholder="Escribe tu nombre"
          {...register("name")} />        
        <button name="name" type="submit"> <img src="./assets/play.png" alt="" /></button>
      </form>
      {error ? <p>Por favor intruduce un nombre</p> : ""}
      <div className="homepage__footer">
      <Footer/>
      </div>
      
    </div>
  );
};

export default HomePages;
