import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import dropdownbtn from '../assets/images/dropdown.svg';
  export default function ProductNavBar() {
    const [ishidden,setishidden]=useState(false);
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 product_left">
            <button className='cat_btn active' onClick={() =>{
              setishidden(!ishidden);
            }}>Categories
              <span className={`btn ${ishidden}`} ><img src={dropdownbtn} alt="" /></span>
            </button>
            <ul className={`mt-2 list ${ishidden}`} >
              <li className={`element active ${ishidden}`} >Packaging</li>
              <li className={`element ${ishidden}`} >DrinkWare</li>
              <li className={`element ${ishidden}`} >Tumblers & Mugs</li>
              <li className={`element ${ishidden}`} >Totes</li>
              <li className={`element ${ishidden}`} >Backpacks & Bags</li>
              <li className={`element ${ishidden}`} >Notebooks & Pens</li>
              <li className={`element ${ishidden}`} >T-Shirts</li>
              <li className={`element ${ishidden}`} >Polos & Shirts</li>
              <li className={`element ${ishidden}`} >Hoodies & Sweats</li>
              <li className={`element ${ishidden}`} >Outerwear</li>
              <li className={`element ${ishidden}`} >Accessories</li>
              <li className={`element ${ishidden}`} >Tech</li>
              <li className={`element ${ishidden}`} >Others</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}
