import React, { useEffect, useState } from 'react';

const Games = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const apiUrl = 'https://euroleague-backend.onrender.com/games';

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

    return (
        <body className="games">
            {isLoading ? (
                <div className="loading-bar-container">
                    <div className="loading-name">Loading . .</div>
                    <div className="loading-bar"></div>
                </div>
            ) : (
                <ul>
                    <div>
                        {data.map(game => (
                            <div key={game.id} >
                                <div className="matchs">
                                    <div>
                                        <div className="date">
                                            {game.Date}
                                        </div>
                                        <div className="HomeTeam">
                                            <div>{game.HomeTeam}</div>
                                        </div>
                                        <img src={game.HomeLogo} alt="Home Logo" className="HomeLogo" />
                                        <li>
                                            <div className={game.HomePoint > game.AwayPoint ? "score win" : "score lose"}>{game.HomePoint}
                                            </div>
                                            &nbsp;
                                            &nbsp;
                                            -
                                            &nbsp;
                                            &nbsp;
                                            <div className={game.AwayPoint > game.HomePoint ? "score win" : "score lose"}> {game.AwayPoint}
                                            </div>
                                        </li>
                                        <img src={game.AwayLogo} alt="Away Logo" className="AwayLogo" />
                                        <div className="AwayTeam">
                                            <div>{game.AwayTeam}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                </ul>)}
        </body>
    )
}

export default Games