import { useEffect, useState } from "react"
import CoffeCard from "./CoffeeCard";
import './CoffeeListingApi.css'
const URL = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"

export default function CoffeeListing() {

    const [CoffeeListing, Setcoffee] = useState([])
    const [available, Setavailable] = useState(true);
    const [activeButton, setActiveButton] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Network Response was not okay')
                }
                const jsonResponse = await response.json();
                Setcoffee(jsonResponse)

            }

            catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, [])
    function allProducts() {
        Setavailable(true)
        setActiveButton(1)
        console.log('all products clicked')
    }
    function availableProducts() {
        Setavailable(false)
        setActiveButton(2)
        console.log('available products clicked')
    }

    return (
        <div className='CoffeeListing'>

            <h1 className='introHeading'>Our Collection</h1>
            <svg className='svgvector' width="257" height="153" viewBox="0 0 257 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04" stroke="#302522" stroke-width="3" stroke-linecap="round" />
            </svg>
            <p className="introPara">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className="btn-div">
                <button id="btn-1" className={activeButton === 1 ? 'active' : ""} onClick={allProducts}>All Products</button>
                <button className={activeButton === 2 ? 'active' : ""} onClick={availableProducts}>Available Now</button></div>

            <div className='coffeediv'>
                {CoffeeListing.map((ele, index) => (
                    (ele.available || available) ? (< CoffeCard key={index} ele={ele} />) : null


                ))}</div>

        </div>)
}