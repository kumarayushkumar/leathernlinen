import { useEffect, useRef, useState } from 'react'
import dropdownBtnImage from '../../assets/images/dropdown.svg'
import { IProductList } from '../../interface'

interface ProductNavBarProps {
  merchendiseProductList: IProductList
  uniformProductList: IProductList
}

const ProductNavBar: React.FC<ProductNavBarProps> = ({ merchendiseProductList, uniformProductList }) => {
  const [catactiveIndex, setcatActiveIndex] = useState(9999)
  const windowSize = useRef([window.innerWidth])
  const [uniactiveIndex, setuniActiveIndex] = useState(0)
  const [mobilewidth] = useState(1213)
  const [isHidden, setIsHidden] = useState(false)
  const [uniformisHidden, setuniformIsHidden] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setuniformIsHidden(mobilewidth >= window.innerWidth ? true : false)
      setIsHidden(mobilewidth >= window.innerWidth ? true : false)
    }

    window.addEventListener('resize', handleResize)

    // Initial call to set the correct number of slides on component mount
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const handleScrollToSection = (sectionId: string, index: number, offset?: number, uniform?: boolean) => {
    if (!uniform) {
      setcatActiveIndex(index)
      setuniActiveIndex(9999)
    }
    else {
      setuniActiveIndex(index)
      setcatActiveIndex(9999)
    }
    const section = document.getElementById(sectionId)
    const headerOffset = offset != null ? offset : 50
    if (section != null) {
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="navbar">
      <div className="nav-container">

        <div className="col-10 product_left">
          <div className="uniform">
            <button
              className={`cat_btn ${uniformisHidden ? 'active' : ''}`}
              onClick={() => {
                setuniformIsHidden(!uniformisHidden)
              }}
            >
              Uniforms
              <span className={`btn ${uniformisHidden ? 'active' : ''}`}>
                <img src={dropdownBtnImage} alt="Dropdown Icon" />
              </span>
            </button>
            <ul className={`list uniform ${uniformisHidden ? 'active' : ''}`}>
              {Object.keys(uniformProductList).map((productType, index) => (
                <li
                  key={productType}
                  onClick={() => handleScrollToSection(productType.replace(/\s/g, '_'), index, 75, true)}
                  className={`element ${uniactiveIndex === index ? 'active' : ''}`}
                >
                  {productType}
                </li>
              ))}
            </ul>
          </div>
          <div className="categories mt-md-4">
            <button
              className={`cat_btn ${isHidden ? 'active' : ''}`}
              onClick={() => {
                setIsHidden(!isHidden)
                if (mobilewidth >= windowSize.current[0]) {
                  setuniformIsHidden(!uniformisHidden)
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
                  onClick={() => handleScrollToSection(productType.replace(/\s/g, '_'), index, 75)}
                  className={`element ${catactiveIndex === index ? 'active' : ''}`}
                >
                  {productType}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
export default ProductNavBar