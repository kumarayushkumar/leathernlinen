import { useRef, useState } from 'react'
import dropdownBtnImage from '../../assets/images/dropdown.svg'
import { IProductList } from '../../interface'

interface ProductNavBarProps {
  merchendiseProductList: IProductList;
  uniformProductList: IProductList;
}

const ProductNavBar: React.FC<ProductNavBarProps> = ({ merchendiseProductList, uniformProductList }) => {
  const [catactiveIndex, setcatActiveIndex] = useState(9999)
  const windowSize = useRef([window.innerWidth]);
  const [uniactiveIndex, setuniActiveIndex] = useState(0)
  const [isHidden, setIsHidden] = useState(952>=windowSize.current[0]? true:false)
  const [uniformisHidden, setuniformIsHidden] = useState(952>=windowSize.current[0]? true:false)

  const handleScrollToSection = (sectionId: string, index: number,offset?: number,uniform?: boolean) => { 
    if(!uniform){
      setcatActiveIndex(index)
      setuniActiveIndex(9999)
    }
    else{
      setuniActiveIndex(index)
      setcatActiveIndex(9999)
    }
    const section = document.getElementById(sectionId);
    const headerOffset = offset != null ? offset : 50;
    if (section != null) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      if(952>=windowSize.current[0]){
        setuniformIsHidden(true);
        setIsHidden(true);
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  return (
    <section className="navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 product_left">
          <div className="uniform">
           <button
              className={`cat_btn ${uniformisHidden? 'active' : ''}`}
              onClick={() => {
                setuniformIsHidden(!uniformisHidden)
              }}
            >
              Uniforms
              <span className={`btn ${uniformisHidden? 'active' : ''}`}>
                <img src={dropdownBtnImage} alt="Dropdown Icon" />
              </span>
            </button>
            <ul className={`list uniform ${uniformisHidden? 'active' : ''}`}>
              {Object.keys(uniformProductList).map((productType, index) => (
                <li
                  key={productType}
                  onClick={() => handleScrollToSection(productType.replace(/\s/g, '_'), index,75,true)}
                  className={`element ${uniactiveIndex === index ? 'active' : ''}`}
                >
                  {productType}
                </li>
              ))}
            </ul>
           </div>
            <div className="categories">
            <button
              className={`cat_btn ${isHidden ? 'active' : ''}`}
              onClick={() => {
                setIsHidden(!isHidden)
                if(952>=windowSize.current[0]){
                  setuniformIsHidden(!uniformisHidden);
                }
              }}
            >
              Categories
              <span className={`btn ${isHidden ? 'active' : ''}`}>
                <img src={dropdownBtnImage} alt="Dropdown Icon" />
              </span>
            </button>
            <ul className={`mt-2 list ${isHidden ? 'active' : ''}`}>
              {Object.keys(merchendiseProductList).map((productType, index) => (
                <li
                  key={productType}
                  onClick={() => handleScrollToSection(productType.replace(/\s/g, '_'), index,75)}
                  className={`element ${catactiveIndex === index ? 'active' : ''}`}
                >
                  {productType}
                </li>
              ))}
            </ul>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductNavBar