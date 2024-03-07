import './App.css'
import CoffeeListing from './CoffeeListingApi'

export default function App() {

  return (<div className='appdiv'>
    <img src="./bg-cafe.jpg" alt="Coffee house image" className='coffehouseimg' />
    <CoffeeListing />
    <div className='createSpace'></div>
  </div >)

}
