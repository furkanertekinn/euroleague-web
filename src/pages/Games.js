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
                <div>
                    {data.map(game => (
                        <div key={game.id} >
                            <div className="matchs">
                                <div>
                                    <div className="date">
                                        {game.Date}
                                    </div>
                                    <div>
                                        <img src={game.HomeLogo} alt="Home Logo" />
                                    </div>
                                    <p>{game.HomeTeam}</p>
                                    <p className="scor-home">{game.HomePoint}
                                    </p>
                                    -
                                    <p className="scor-away"> {game.AwayPoint}
                                    </p>
                                    <p>{game.AwayTeam}</p>
                                    <div>
                                        <img src={game.AwayLogo} alt="Away Logo" />
                                    </div>
                                </div>
                            </div>
                            {/* &nbsp;
                            <hr/>
                            &nbsp; */}
                        </div>))}
                </div>)}
        </body>
    )
}

export default Games