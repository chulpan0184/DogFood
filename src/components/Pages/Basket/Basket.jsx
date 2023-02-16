// import BasketItem from './BasketItem'

// export function Basket() {
//   return (
//     <div className="d-flex align-items-center justify-content-center flex-column">
//       {basketProducts[0] && (
//       <>
//         <ul className="d-flex p-2 flex-wrap align-items-center justify-content-center">
//           {bascetProducts.map(({ _id: id, ...item }) => (
//             <BasketItem
//               key={id}
//               id={id}
//               name={item.name}
//               price={item.price}
//               pictures={item.pictures}
//             />
//           ))}
//         </ul>
//         <button type="button" className="btn btn-primary" onClick={clearBasketHandler}>
//           Clear
//         </button>
//       </>
//       )}
//     </div>
//   )
// }

/* eslint-disable no-undef */
import { useState, useEffect, memo } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useSelector } from 'react-redux'
import { dogFoodApi } from '../../../api/DogFoodApi'
import { ProductsItem } from '../Products/ProductsItem/ProductsItem'
import { Louder } from '../../louder/Louder'
import { basketCounterReducer } from '../../../redux/reducer/basketCounterReduser'
import basketStyle from './basketStyle.module.css'

function Basket() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(() => {
    const tokenFromStorage = localStorage.getItem('token')
    return tokenFromStorage ?? ''
  })

  useEffect(() => {
    localStorage.setItem('token', token)
    dogFoodApi.setToken(token)
  }, [token])

  const { basketCounter } = useSelector((state) => state)

  const {
    data, isLoading, isError, error, refetch,
  } = useQuery({
    queryKey: ['productsfetch'],
    queryFn: () => fetch('https://api.react-learning.ru/products', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json(data)),
    enabled: token !== undefined,
  })

  if (isLoading) return <Louder />

  if (isError) {
    return (
      <p>
        Произошла ошибка:
        {' '}
        {error.message}
      </p>
    )
  }

  const clearProductsHandler = () => {
    console.log('click')
  }

  console.log(isLoading, isError, error, refetch)
  const { products } = data

  return (
    <>
      <div className={basketStyle.buttonWrap}>
        <button
          type="button"
        >
          Перейти к оплате
          {' '}
          {basketCounter}
          {' '}
          товаров
          {' '}
          {basketCounterReducer}
        </button>
        <button
          onClick={clearProductsHandler}
          type="button"
        >
          Delete
        </button>
      </div>
      <h1 className={basketStyle.h1}>Basket</h1>
      {products && (
        <div className={basketStyle.wrap}>
          {products.map((product) => (
            <ProductsItem
              key={product._id}
              name={product.name}
              description={product.description}
              pictures={product.pictures}
              price={product.price}
              wight={product.wight}
            />
          ))}
        </div>
      )}
    </>
  )
}
export const BasketMemo = memo(Basket)
