import React from 'react';
import './style.css';
import First from '../assets/rooms/room-1/room-2.jpg';
import Third from '../assets/rooms/room-1/room-1.jpg';
import Second from '../assets/rooms/room-1/room-3.jpg';
import Forth from '../assets/rooms/room-1/room-6.jpg';

function Room() {
    return ( <
        div >
        <
        div className = 'bg-warning py-5 push-left' >
        <
        h2 className = 'push-left mt-5' > SINGLE < /h2>  <
        div className = 'row push-left' >
        <
        div className = 'col-lg-4' > < p className = 'push-left' > < u > DETAILS < /u>  < /
        p >
        <
        p className = 'push-left' > < b > Size: < /b> 100sq/ft < br / > < b > Floor: < /b> Ground < br / > < b > Self - Contained: < /b> YES < br / > < b > Appliances: < /b> 32" LG-Tv, Flat Iron, Air Conditioner <br/ > < b > Max Number of Guests: < /b> 2  </p >
        <
        /
        div > <
        div className = 'col-lg-2' > < p className = 'push-left' > < u > SERVICES < /u>  < /
        p >
        <
        p className = 'push-left' >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "20"
        height = "20"
        fill = "rgb(250, 166, 0)"
        class = "bi bi-car-front"
        viewBox = "0 0 16 16" >
        <
        path d = "M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z" / >
        <
        path d = "M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z" / >
        <
        /svg>   <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "20"
        height = "20"
        fill = "rgb(250, 166, 0)"
        class = "bi bi-shield-check"
        viewBox = "0 0 16 16" >
        <
        path d = "M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" / >
        <
        path d = "M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" / >
        <
        /svg> <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "20"
        height = "20"
        fill = "rgb(250, 166, 0)"
        class = "bi bi-wifi"
        viewBox = "0 0 16 16" >
        <
        path d = "M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" / >
        <
        path d = "M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" / >
        <
        /svg> < /
        p >
        <
        /div> <
        div className = 'col-lg-6' >
        <
        h6 > UG(SHS) / Night < /h6 > < h1 className = 'orange-syke px-5 py-2' > 80, 000 < /
        h1 >
        <
        div className = 'row' > < div className = 'col-6' >
        <
        p className = 'shadow border-0 bg-warning px-lg-5 py-2' > <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "16"
        height = "16"
        fill = "currentColor"
        class = "bi bi-pencil-square"
        viewBox = "0 0 16 16" >
        <
        path d = "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" / >
        <
        path d = "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" / >
        <
        /svg>  BOOK THIS ROOM < /p > < /div><div className='col-6'> <
        p className = 'shadow bg-warning px-lg-5 py-2' > ADD A PAYMENT PLAN < /p > < /
        div > < /div></div >
        <
        /
        div >
        <
        div className = 'row p-5 bg-dark' >
        <
        div className = 'col-lg-5' > < img src = { First }
        className = "room-images"
        alt = "First-room" /
        >
        <
        /
        div > <
        div className = 'col-lg-7' > < img src = { Third }
        className = "room-images"
        alt = "First-room" /
        >
        <
        /
        div > < /
        div >
        <
        div className = 'row p-5 bg-light shadow' >
        <
        div className = 'col-lg-5' > < img src = { Second }
        className = "room-images"
        alt = "First-room" /
        >
        <
        /
        div > <
        div className = 'col-lg-7' > < img src = { Forth }
        className = "room-images"
        alt = "First-room" /
        >
        <
        /
        div > < /
        div >
        <
        /
        div >

        <
        /div>
    );
}

export default Room;