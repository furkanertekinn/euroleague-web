import React, { useEffect, useState } from 'react';
import {
    Button
} from "@blueprintjs/core"
import { useNavigate } from 'react-router-dom';


const Players = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const apiUrl = 'https://euroleague-backend.onrender.com/players';
    const navigate = useNavigate();

    useEffect(() => {

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                    setIsLoading(false);
                },
                (error) => {
                    console.log(error);
                    setIsLoading(false);
                }
            )

    }, [])

    const updatePlayers = (id) => {
        navigate('/update/' + id);
    }

    const deletePlayers = (id) => {

        const message = "Silmek istediğinize emin misiniz ?";
        const answer = window.confirm(message);

        if (answer) {
            fetch(`https://euroleague-backend.onrender.com/deleteplayer/${id}`, {
                method: "DELETE",
            })
                .then(response => response.json())

            alert("Silme işlemi başarılı bir şekilde gerçekleştirildi!")
            document.location.reload(true);
        }
    }

    return (
        <body className='f'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {isLoading ? (
                <div className="loading-bar-container">
                    <div className="loading-name">Loading . .</div>
                    <div className="loading-bar"></div>
                </div>
            ) : (
                <ul>
                    {data.map(player => (
                        <li key={player.id}>

                            <div className='card'>
                                <div className="picture">
                                    <img src={player.PhotoUrl !== "" ? player.PhotoUrl : 'https://d1bvpoagx8hqbg.cloudfront.net/259/0f326ce8a41915e8b1d21ffaee087fae.jpg'} width='300' height='250' alt="" />
                                </div>
                                <div className='content'>
                                    <div className='top'>
                                        <div>
                                            <Button className="buttonUpdate" intent='warning' onClick={() => updatePlayers(player.id)}>Update</Button>
                                            <Button className="buttonDelete" intent="danger" onClick={() => deletePlayers(player.id)}>Delete</Button>
                                        </div>
                                        <div className='share-button-wrapper'>
                                            <i className='fa fa-brands fa-facebook' aria-hidden='true'></i>
                                            <i className='fa fa-brands fa-instagram' aria-hidden='true'></i>
                                            <i className='fa fa-brands fa-twitter' aria-hidden='true'></i>
                                        </div>
                                    </div>
                                    <div className='bottom'>
                                        <div className='title-wrapper'>
                                            <div className='name'>
                                                Name: {player.Name}
                                            </div>
                                            <div className='age'>
                                                Age: {player.Age}
                                            </div>
                                            <div className='height'>
                                                Height: {player.Height}
                                            </div>
                                            <div className='team'>
                                                Team: {player.Team}
                                            </div>
                                            <div className='nationality'>
                                                Nationality: {player.Nationality}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>)}
        </body>
    )
}

export default Players