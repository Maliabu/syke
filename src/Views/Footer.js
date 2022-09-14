import './style.css';

function Footer() {
    return ( <
        div className = "row p-5 bg-light footer bg-dark" >
        <
        div className = "col-lg-4 col-sm-6" >
        <
        p > OPEN HOURS < /p>  <
        div className = "row" >
        <
        div className = "col" >
        <
        p > MONDAY < /p> <
        p > TUESDAY < /p> <
        p > WEDNESDAY < /p> <
        p > THURSDAY < /p> <
        p > FRIDAY < /p> <
        p > SATURDAY < /p> <
        p > SUNDAY < /p> < /
        div >
        <
        div className = "col" >
        <
        p > 6: 00 AM - 6: 00 AM < /p> <
        p > 6: 00 AM - 6: 00 AM < /p> <
        p > 6: 00 AM - 6: 00 AM < /p> <
        p > 6: 00 AM - 6: 00 AM < /p> <
        p > 6: 00 AM - 6: 00 AM < /p> <
        p > 6: 00 AM - 6: 00 AM < /p> <
        p > 6: 00 AM - 6: 00 AM < /p> < /
        div > <
        /div> < /
        div >
        <
        div className = "col-lg-4 col-sm-6 p-5" >
        <
        p > CONTACTS < /p> <
        p > < b > Administration < /b></p >
        <
        p > +256(777) 904785 < /p> <
        p > +256(777) 904785 < /p> <
        p className = "mt-2" > < b > Customer Service < /b></p >
        <
        p > +256(777) 904785 < /p> <
        p > +256(777) 904785 < /p> < /
        div >
        <
        div className = "col p-5" >
        <
        p > LOCATION < /p> < /
        div >
        <
        /div>
    );
}

export default Footer;