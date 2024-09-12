import { useState } from "react";
import './styles/ContactForm.css'

const FoodForm = ({updateCallback }) => {
    const [username, setUsername] = useState("");
    const [man, setMan] = useState(0);
    const [ngot, setNgot] = useState(0);
    const [cay, setCay] = useState(0);
    const [check,setcheck] = useState(0);
    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            username,
            man,
            ngot,
            cay,
            check,
        }


        console.log(JSON.stringify(data))
        const url = "https://app-cjhj.onrender.com/create_food"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options);
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            //updateCallback()
        }
    }

    function stoi(settarget,value) {
        let numrifyV = 0;
        //console.log(value)
        
        if(value !== ""){
            numrifyV = parseInt(value, 10);
        }
       
        if (numrifyV >= 3){
            numrifyV = 3;
        }
        else if (numrifyV < 0 || isNaN(numrifyV)) {
            numrifyV = 0;
        }

        //console.log(numrifyV);

        switch(settarget){
            case "man":
                //console.log({numrifyV, settarget})
                setMan(numrifyV);
                break;
            case "ngot":
                setNgot(numrifyV);
                break;
            case "cay":
                setCay(numrifyV);
                break;
        }
    }

    return (
    
    <div class = "loginhud">
        <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="username" class = "boxtitle">Username: </label>
                    <br></br>
                    <input
                        class = "textbox"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="man" class = "boxtitle">Saltiness: </label>
                    <br></br>
                    <input
                        class = "textbox"
                        type="number"
                        id="man"
                        value={man}
                        onChange={(e) => stoi(e.target.id, e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="ngot" class = "boxtitle">Sweetness: </label>
                    <br></br>
                    <input
                        class = "textbox"
                        type="number"
                        id="ngot"
                        value={ngot}
                        onChange={(e) => stoi(e.target.id, e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="cay" class = "boxtitle">Spiciness: </label>
                    <br></br>
                    <input
                        class = "textbox"
                        type="number"
                        id="cay"
                        value={cay}
                        onChange={(e) => stoi(e.target.id, e.target.value)}
                    />
                </div>
                <br></br>
                <button type="submit" class = "buttons" id = "submitbut">Add Food</button>
            </form>
    </div>
    );
};

export default FoodForm