import Navbars from './Navbar';
import bar from '../assets/bar1.jpg';

function Services() {
    return ( <
        div >
        <
        Navbars / >
        <
        div className = ' bg-dark row' >
        <
        div className = 'row bg-light text-dark shadow-sm py-2 px-5' >
        <
        p className = 'px-5 mt-2' > BED & BREAKFAST < /p><p className='px-2 mt-2'>PASTRY TAB</p > < p className = 'px-5 mt-2' > OPEN BAR < /p><
        p className = 'bg-warn border-0 shadow px-5 py-2' > <
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
        /svg>  MENU < /p > <
        h1 className = 'display-4 p-5' > Services < /h1> < /
        div > < /
        div >
        <
        div className = 'p-5 row bg-light' > <
        div className = 'col-lg-4 bg-dark col-sm-12 p-5' >

        <
        h2 > Coffee < /h2>  <
        p > Find all your favorite BREAKFAST RUSH dishes, from both local and international menus and have all this without leaving the comfort of your room or your "BED" < /p>   <
        h2 > Tea < /h2>  <
        p > Find all your favorite BREAKFAST RUSH dishes, from both local and international menus and have all this without leaving the comfort of your room or your "BED" < /p>   < /
        div > <
        div className = 'col-lg-8 darker col-sm-12 p-5' > <
        img src = 'https://cdnimg.webstaurantstore.com/images/blogs/3576/bed-breakfast_header.jpg'
        alt = 'bed & breakfast'
        width = "100%"
        height = "100%" /
        >
        <
        /
        div >
        <
        /div>  <
        div className = 'bg-dark p-5 row' >
        <
        h2 > Pastries < /h2>  <
        div className = 'col-lg-4 bg-light shadow col-sm-12 p-5' >

        <
        h2 > Breads < /h2>  <
        p > Find all your favorite BREAKFAST RUSH dishes, from both local and international menus and have all this without leaving the comfort of your room or your "BED" < /p>  <
        img src = 'https://richanddelish.com/wp-content/uploads/2022/06/triple-chocolate-cake.jpg'
        alt = 'bed & breakfast'
        width = "100%"
        height = "70%" /
        >
        <
        /
        div > <
        div className = 'col-lg-4 bg-dark shadow col-sm-12 p-5' >

        <
        h2 > Cakes < /h2>  <
        p > Find all your favorite BREAKFAST RUSH dishes, from both local and international menus and have all this without leaving the comfort of your room or your "BED" < /p>    <
        img src = 'https://www.barleyandsage.com/wp-content/uploads/2021/08/sourdough-banana-bread-8231.jpg'
        alt = 'bed & breakfast'
        width = "100%"
        height = "70%" /
        >
        <
        /
        div > <
        div className = 'col-lg-4 bg-light shadow col-sm-12 p-5' >

        <
        h2 > Puffs < /h2>  <
        p > Find all your favorite BREAKFAST RUSH dishes, from both local and international menus and have all this without leaving the comfort of your room or your "BED" < /p>    <
        img src = 'https://fortheloveofcooking.net/wp-content/uploads/2021/12/Nutella-Puff-Pastry-Braid-3425-1.jpg'
        alt = 'bed & breakfast'
        width = "100%"
        height = "70%" /
        >
        <
        /
        div >
        <
        /div> <
        div className = 'p-5 row bg-light' > <
        div className = 'col-lg-4 bg-dark col-sm-12 p-5' >

        <
        h2 > Open Bar < /h2>  <
        p > Find all your favorite BREAKFAST RUSH dishes, from both local and international menus and have all this without leaving the comfort of your room or your "BED" < /p>   <
        h2 > Restaurant < /h2>  <
        p > Find all your favorite BREAKFAST RUSH dishes, from both local and international menus and have all this without leaving the comfort of your room or your "BED" < /p>   < /
        div > <
        div className = 'col-lg-8 darker col-sm-12 p-5' > <
        img src = { bar }
        alt = 'bed & breakfast'
        width = "100%"
        height = "100%" /
        >
        <
        /
        div >
        <
        /div> < /
        div >
    );

}
export default Services;