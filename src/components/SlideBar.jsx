import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


const SlideBar = ({contacts}) => {
    const navigate = useNavigate();
    const [gtC, setGTC] = useState(false)

    function e() {
        navigate("/form");
    }



    return <div>
        <div class = "containerbox">
            <img src="/images/logo.png" class = "faslogo" id = "ex-mar"/>
            <h2 class = "logotitle">FAS</h2>
            <span class = "divider" id = "ex-mar"></span>

            <td id = "ex-mar" class = "formbuttons">
                <button class = "buttons" onClick={e}>Đăng nhập</button>
                <button class = "buttons" onClick={e}>Đăng ký</button>
            </td>
        </div>
        
    </div>
    
}

export default SlideBar