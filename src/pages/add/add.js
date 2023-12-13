import { React, useState } from "react"
import {
    Button,
    InputGroup
} from "@blueprintjs/core"

const Add = () => {

    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState("")
    const [newHeight, setNewHeight] = useState("")
    const [newTeam, setNewTeam] = useState("")
    const [newNationality, setNewNationality] = useState("")
    const [newPhotoUrl, setNewPhotoUrl] = useState("")

    const apiUrl = 'https://euroleague-backend.onrender.com/addplayer';

    const addPlayers = () => {
        const Name = newName.trim()
        const Age = newAge.trim()
        const Height = newHeight.trim()
        const Team = newTeam.trim()
        const Nationality = newNationality.trim()
        const PhotoUrl = newPhotoUrl.trim()

        const message = "Oyuncuyu eklemek istediğinize emin misiniz ?";
        const answer = window.confirm(message);

        if (Name && Age && Height && Team && Nationality && answer) {
            fetch(apiUrl, {
                method: "POST",
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

            alert("Oyuncu ekleme işlemi başarılı bir şekilde gerçekleştirildi!")
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
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                />
            </div>

            <div className="add">
                <div>
                    Age
                </div>
                <InputGroup className="inputgroup"
                    value={newAge}
                    onChange={e => setNewAge(e.target.value)}
                />
            </div>

            <div className="add">
                Height
                <InputGroup className="inputgroup"
                    value={newHeight}
                    onChange={e => setNewHeight(e.target.value)}
                />
            </div>

            <div className="add">
                Team
                <InputGroup className="inputgroup"
                    value={newTeam}
                    onChange={e => setNewTeam(e.target.value)}
                />
            </div>

            <div className="add">
                Nationality
                <InputGroup className="inputgroup"
                    value={newNationality}
                    onChange={e => setNewNationality(e.target.value)}
                />
            </div>

            <div className="add">
                PhotoUrl
                <InputGroup className="inputgroup"
                    value={newPhotoUrl}
                    onChange={e => setNewPhotoUrl(e.target.value)}
                />
            </div>

            <div>
                <Button className="buttonAdd" intent="success" onClick={addPlayers}>Add Player</Button>
            </div>
        </div>
    )
}

export default Add