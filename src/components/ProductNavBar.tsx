import { useState } from 'react';
import dropdownbtn from '../assets/images/dropdown.svg';
type ProductList = {
  [key: string]: {
    [key: string]: {
      name: string;
      image: string;
      price: number;
    }
  }
}
export default function ProductNavBar({ productList }: { productList: ProductList }) {
  const [activeBtn, setActiveBtn] = useState(0);
  const handleScrollToSection = (sectionId: string,index:number) => {
    const section = document.getElementById(sectionId);
    setActiveBtn(index);
    if(section !=null){
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [ishidden, setishidden] = useState(false);
  return (
    <section className='Navbar'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 product_left">
            <button className='cat_btn active' onClick={() => {
              setishidden(!ishidden);
            }}>Categories
              <span className={`btn ${ishidden}`} ><img src={dropdownbtn} alt="" /></span>
            </button>
            <ul className={`mt-2 list ${ishidden}`} >
              {Object.keys(productList).map((productType,index) => (
                <li onClick={() => handleScrollToSection(productType.replace(/\s/g,"_"),index)} className={`element ${ishidden} ${activeBtn === index ? 'active' : ''}`}>{productType}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}
