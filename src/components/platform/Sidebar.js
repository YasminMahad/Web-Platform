import React from 'react'
import '../platform/style.css'
import { useNavigate } from 'react-router-dom'
import image from './logo.png'

function Sidebar() {
        const navigate = useNavigate()

        return (
                <div className="navbar">
                        <img src={image} alt="" id=""></img>

                        <ul>
                                <a onClick={() => ('/board')}><br />
                                        <a><span class="item" id="first">Dashboard</span></a>
                                </a>
                                
                                <a onClick={() => navigate('/payments')}><br />

                                        <a><span class="item" id="second">Payment</span></a>

                                </a><br />
                                <a onClick={() => navigate('/notification')}>

                                        <span class="item" id="third">Notification</span>

                                </a><br />

                                <a onClick={() => navigate('/setting')}>

                                        <span class="item" id="fourth">Settings</span>
                                </a><br />



                        </ul>
                </div>
        )
}

export default Sidebar