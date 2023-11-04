import { React, useEffect, useState } from "react"
import {
    Button,
    InputGroup
} from "@blueprintjs/core"
import { useParams } from "react-router-dom"

const Update = () => {

    const { id } = useParams();

    const [values, setValues] = useState({
        id: id,
        Name: '',
        Age: '',
        Height: '',
        Team: '',
        Nationality: '',
        PhotoUrl: ''
    });

    const updatePlayers = Id => {

        fetch(`https://euroleague-backend.onrender.com/updateplayer/${id}`, {
            method: "PUT",
            body: JSON.stringify({

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(response => response.json())

    }

    // const [values, setValues] = useState({
    //     id: id,
    //     Name: '',
    //     Age: '',
    //     Height: '',
    //     Team: '',
    //     Nationality: '',
    //     PhotoUrl: ''
    // });



    // const updatePlayers = () => {
    //     fetch('https://euroleague-backend.onrender.com/updateplayer/' + id)
    //         .then(res => {
    //             setValues({ ...values, Name: res.data.Name, Age: res.data.Age, Height: res.data.Height, Team: res.data.Team, Nationality: res.data.Nationality, PhotoUrl: res.data.PhotoUrl })
    //         })
    //         .catch((data) => console.log(data))
    // }

    return (

        <div className="addTable">

            <div className="add">
                <p>
                    Name
                </p>
                <InputGroup className="inputgroup"
                    value={values.Name}
                    onChange={e => setValues({ ...values, Name: e.target.value })}
                />
            </div>

            <div className="add">
                <div>
                    Age
                </div>
                <InputGroup className="inputgroup"
                    value={values.Age}
                    onChange={e => setValues({ ...values, Age: e.target.value })}
                />
            </div>

            <div className="add">
                Height
                <InputGroup className="inputgroup"
                    value={values.Height}
                    onChange={e => setValues({ ...values, Height: e.target.value })}
                />
            </div>

            <div className="add">
                Team
                <InputGroup className="inputgroup"
                    value={values.Team}
                    onChange={e => setValues({ ...values, Team: e.target.value })}
                />
            </div>

            <div className="add">
                Nationality
                <InputGroup className="inputgroup"
                    value={values.Nationality}
                    onChange={e => setValues({ ...values, Nationality: e.target.value })}
                />
            </div>

            <div className="add">
                PhotoUrl
                <InputGroup className="inputgroup"
                    value={values.PhotoUrl}
                    onChange={e => setValues({ ...values, PhotoUrl: e.target.value })}
                />
            </div>

            <div>
                <Button className="buttonAdd" intent="success" onClick={updatePlayers}>Update Player</Button>
            </div>
        </div>
    )
}

export default Update