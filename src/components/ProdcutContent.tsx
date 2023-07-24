import img from '../assets/images/bag.jpg';
export default function ProductContent() {
  const products = {
    'Packaging': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      },
      product3: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      },
      product4: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      },
      product: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      },
    },
    'DrinkWare': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'Tumblers & Mugs': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'Totes': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'Backpacks & Bags': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'Notebooks & Pens': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'T-Shirts': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'Polos & Shirts': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'Hoodies & Sweats': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'Outerwear': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'Accessories': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'Tech': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    'Others': {
      product1: {
        name: 'Laptop',
        image: img,
        price: 999.99,
      },
      product2: {
        name: 'Smartphone',
        image: img,
        price: 599.99,
      }
    },
    
   
    // Add more product types here
  };



  return (
    <>
      <section className="product_content">
        <div>
          {Object.keys(products).map((productType) => (
            <div className="section" key={productType}>
              <h5 className="heading">Would you like to add <span>{productType}</span> to your enquiry?</h5>
              <div className='arr_card mt-4'>
              {Object.keys(products[productType]).map((productKey) => {
                const product = products[productType][productKey];
                return (
                  <div className="card mb-5" key={productKey}>
                    <div className="image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className='content'>
                      <h6>{product.name}</h6>
                      <p>From ${product.price} per unit</p>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          ))}
        </div>
      </section>


    </>
  )
}