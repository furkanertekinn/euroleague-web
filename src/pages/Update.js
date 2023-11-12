import { React, useState } from "react"
import {
    Button,
    InputGroup
} from "@blueprintjs/core"
import { useParams } from "react-router-dom"

const Update = () => {

    const { id } = useParams();

    const [upName, setName] = useState("")
    const [upAge, setAge] = useState("")
    const [upHeight, setHeight] = useState("")
    const [upTeam, setTeam] = useState("")
    const [upNationality, setNationality] = useState("")
    const [upPhotoUrl, setPhotoUrl] = useState("")

    const updatePlayers = () => {
        const Name = upName;
        const Age = upAge;
        const Height = upHeight;
        const Team = upTeam;
        const Nationality = upNationality;
        const PhotoUrl = upPhotoUrl;

        const message = "Oyuncu profilini güncellemek istediğinize emin misiniz ?";
        const answer = window.confirm(message);

        if (Name && Age && Height && Team && Nationality && answer) {
            fetch(`https://euroleague-backend.onrender.com/updateplayer/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    "player_name": Name,
                    "player_age": Age,
                    "player_height": Height,
                    "player_team": Team,
                    "player_nationality": Nationality,
                    "player_photo_url": PhotoUrl
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then(response => response.json())

            alert("Güncelleme işlemi başarılı bir şekilde gerçekleştirildi!")
            document.location.reload(true);
        }

    }

    return (

        <div className="addTable">

            <div className="add">
                <p>
                    Name
                </p>
                <InputGroup className="inputgroup"
                    value={upName}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="add">
                <div>
                    Age
                </div>
                <InputGroup className="inputgroup"
                    value={upAge}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <div className="add">
                Height
                <InputGroup className="inputgroup"
                    value={upHeight}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>

            <div className="add">
                Team
                <InputGroup className="inputgroup"
                    value={upTeam}
                    onChange={(e) => setTeam(e.target.value)}
                />
            </div>

            <div className="add">
                Nationality
                <InputGroup className="inputgroup"
                    value={upNationality}
                    onChange={(e) => setNationality(e.target.value)}
                />
            </div>

            <div className="add">
                PhotoUrl
                <InputGroup className="inputgroup"
                    value={upPhotoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                />
            </div>

            <div>
                <Button className="buttonAdd" intent="success" onClick={updatePlayers}>Update Player</Button>
            </div>
        </div>
    )
}

export default Update