import Navbars from './Navbar';
import Button from 'react-bootstrap/Button';
import './style.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import First from '../assets/rooms/room-2/room.jpg';
import Second from '../assets/rooms/room-1/room-1.jpg';
import big from '../assets/bg-4.jpg';
import big2 from '../assets/bg-22.jpg';
import BootstrapDatePicker from './DatePickerComponent';
import { FormGroup } from 'react-bootstrap';

function Home() {
    return ( < container >
        <
        Navbars / >
        <
        div className = "row px-5 py-3 bg-warning justify-content-start" >
        <
        p className = 'bg-dark rounded-circle px-3 py-2 push-left x-large' > Sy < /p> <
        p className = ' push-left mt-3' > Guest Account < /p>  <
        div >
        <
        Button className = ' bg-warn shadow border-0 px-5 py-2' >
        <
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
        /svg> 
        MAKE A RESERVATION < /Button ><
        Button className = ' bg-warning shadow border-0 px-lg-5 py-2' > ADD A PAYMENT PLAN < /Button></div > < /
        div >
        <
        div className = ' row' >
        <
        div className = 'bg-warning p-5 shadow' >
        <
        div className = 'bg-light py-4 px-5 row' > < p className = 'border rounded-circle py-1' > f < /p> < p className = 'border rounded-circle py-1 mx-3' > t </p > < p className = 'border rounded-circle py-1' > G < /p> <p className='py-1 mx-3 px-5 shadow'>Subscribe to our News Letter</p > <
        h1 className = ' text-center p-5 mt-5 display-4' > < b > SYKE WORLD < /b><br/ > Hotel < /
        h1 >
        <
        /
        div > < p className = "font-weight-light" >
        <
        Link to = { "room" } >
        <
        Button className = 'mt-5 bg-warn shadow border-0 px-5 py-2' > LOOKING AT OUR ROOMS < /Button></Link > < /
        p > < /div></div > <
        div className = 'row p-5 bg-warning shadow' > <
        div className = 'row bg-warn' >
        <
        div className = 'col-lg-2 col-sm-12 py-5 px-3' >
        <
        h3 > CHECK IN < /h3>  <
        BootstrapDatePicker / >
        <
        /
        div > <
        div className = 'col-lg-2 col-sm-12 py-5 px-3' >
        <
        h3 > CHECK OUT < /h3>   <
        BootstrapDatePicker / >
        <
        /
        div > <
        div className = 'col-lg-2 col-sm-12 px-3 py-5' >
        <
        h3 > ROOM < /h3>   <
        FormGroup className = 'px-5 shadow bg-warn py-1' >
        <
        select className = 'border-0 bg-warn' >
        <
        option > SINGLE < /option> <
        option > DOUBLE < /option> <
        option > DELUXE < /option> < /
        select > < /
        FormGroup > < /
        div >
        <
        div className = 'col-lg-2 col-sm-12 px-3 py-5' >
        <
        h3 > NUMBER OF GUESTS < /h3>  <
        FormGroup className = 'px-5 shadow bg-warn py-1' >
        <
        select className = 'border-0 bg-warn' >
        <
        option > 1 < /option> <
        option > 2 < /option> <
        option > 3 < /option> < /
        select > < /
        FormGroup >
        <
        /
        div > <
        div className = 'col-lg-4 col-sm-12 py-5 bg-dark' >
        <
        Button className = ' bg-dark back border-0 px-5 py-2'
        type = 'submit' > CHECK AVAILABILITY < /Button> < /
        div > < /
        div > < /
        div > <
        div className = 'row bar-below-nav bg-light p-5' >
        <
        h2 className = 'display-4 mt-5' > Our Rooms & Services < /h2>   <
        p className = 'p-2' > Check
        for availability of the rooms, book one or more reservations < br / > right here and lets get you checked - in faster. < /p><div className='row bar-below-nav' > <
        Button className = 'px-5 py-2 shadow border-0 bg-warn' > MORE ROOMS < /Button> </div > < /
        div >
        <
        div className = 'row bg-warning shadow p-5' >
        <
        div className = 'col-lg-6' > < img src = { First }
        className = "room-images"
        alt = "First-room" /
        >
        <
        /
        div > <
        div className = 'col-lg-6' > < img src = { Second }
        className = "room-images"
        alt = "First-room" /
        >
        <
        /
        div > < /
        div >

        <
        div className = 'row bg-dark p-5' >
        <
        div className = 'col-lg-6' > < img src = { big }
        className = "room-images"
        alt = "First-room" /
        >
        <
        /
        div > <
        div className = 'col-lg-6' > < img src = { big2 }
        className = "room-images"
        alt = "First-room" /
        >
        <
        /
        div > < /
        div >

        <
        div className = 'row p-5 bg-dark' > <
        div className = 'col p-5' >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "30"
        height = "30"
        fill = "rgb(250, 166, 0)"
        class = "bi bi-wifi"
        viewBox = "0 0 16 16" >
        <
        path d = "M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" / >
        <
        path d = "M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" / >
        <
        /svg> <
        h4 className = 'mt-2' > Wifi < /h4><p className='small'>At speeds up to 64Mbps 24/
        7, syke world is your away office. < /p></div >
        <
        div className = 'col p-5' >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "30"
        height = "30"
        fill = "rgb(250, 166, 0)"
        class = "bi bi-shield-check"
        viewBox = "0 0 16 16" >
        <
        path d = "M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" / >
        <
        path d = "M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" / >
        <
        /svg> <
        h4 className = 'mt-2' > Security < /h4><p className='small'>At speeds up to 64Mbps 24/
        7, syke world is your away office. < /p></div >
        <
        div className = 'col p-5' >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "30"
        height = "30"
        fill = "rgb(250, 166, 0)"
        class = "bi bi-car-front"
        viewBox = "0 0 16 16" >
        <
        path d = "M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z" / >
        <
        path d = "M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z" / >
        <
        /svg> <
        h4 className = 'mt-2' > Car Parking < /h4><p className='small'>At speeds up to 64Mbps 24/
        7, syke world is your away office. < /p></div >
        <
        div className = 'col p-5' >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "30"
        height = "30"
        fill = "rgb(250, 166, 0)"
        class = "bi bi-cup-straw"
        viewBox = "0 0 16 16" >
        <
        path d = "M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z" / >
        <
        /svg> <
        h4 className = 'mt-2' > Open Bar < /h4><p className='small'>At speeds up to 64Mbps 24/
        7, syke world is your away office. < /p></div >
        <
        /div> <
        div className = 'row px-5 bg-dark' > <
        div className = 'col p-5' >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "30"
        height = "30"
        fill = "rgb(250, 166, 0)"
        class = "bi bi-cup-hot"
        viewBox = "0 0 16 16" >
        <
        path d = "M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z" / >
        <
        path d = "m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" / >
        <
        /svg> <
        h4 className = 'mt-2' > Bed & Breakfast < /h4><p className='small'>At speeds up to 64Mbps 24/
        7, syke world is your away office. < /p></div >
        <
        div className = 'col p-5' > < h4 > Restaurant < /h4><p className='small'>At speeds up to 64Mbps 24/
        7, syke world is your away office. < /p></div >
        <
        div className = 'col p-5 ' >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "30"
        height = "30"
        fill = "rgb(250, 166, 0)"
        class = "bi bi-shop-window"
        viewBox = "0 0 16 16" >
        <
        path d = "M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" / >
        <
        /svg> <
        h4 className = 'mt-2' > Pastry Shop < /h4><p className='small'>At speeds up to 64Mbps 24/
        7, syke world is your away office. < /p></div >
        <
        div className = 'col p-5' > < h4 > 24 / Hour Room Service < /h4 > < p className='small'> At speeds up to 64 Mbps 24 /
        7, syke world is your away office. < /p></div >
        <
        /div> <
        Footer / >
        <
        /
        container >
    );
}
export default Home;