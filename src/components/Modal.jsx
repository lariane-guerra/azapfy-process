/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Modal.css'
import {AiOutlineClose} from 'react-icons/ai'

export default (props) => {              
        return(
        <>
            <div className={`modal ${props.open && 'active' }`}>
                <div className="modal-content">
                    <div className="close" onClick={() => props.close(false)}>
                        <AiOutlineClose/>
                        </div>
                    <div className="img">
                        <img src={props.obj?.images?.sm} alt="imagem-hero" />
                    </div>
                    <div className="information">
                        <div className="tit-name">
                            <h1>{props.obj?.name}</h1>
                            <h2>{props.obj?.biography?.fullName}</h2>
                        </div>
                        <div className="gen-rac">
                            <p>Gênero: <span>{props.obj?.appearance?.gender}</span></p>
                            <p>Raça: <span>{props.obj?.appearance?.race}</span></p>
                        </div>
                        <div className="skills">
                            <h2>Habilidades:</h2>
                            <p>Inteligência:<span className="dados">{props.obj?.powerstats?.intelligence}</span></p>
                            <p>Força:<span className="dados">{props.obj?.powerstats?.strength}</span></p>
                            <p>Velocidade:<span className="dados">{props.obj?.powerstats?.speed}</span></p>
                            <p>Durabilidade:<span className="dados">{props.obj?.powerstats?.durability}</span></p>
                            <p>Poder:<span className="dados">{props.obj?.powerstats?.power}</span></p>
                            <p>Combate:<span className="dados">{props.obj?.powerstats?.combat}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
   
}

                    




