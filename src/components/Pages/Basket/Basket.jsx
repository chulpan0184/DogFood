/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import { useState, useEffect, memo } from 'react'
// import { useQuery } from '@tanstack/react-query'

// import { useSelector } from 'react-redux'
// import { dogFoodApi } from '../../../api/DogFoodApi'
// import { ProductsItem } from '../Products/ProductsItem/ProductsItem'
// import { Louder } from '../../louder/Louder'
// import { basketCounterReducer } from '../../../redux/reducer/basketCounterReduser'
// import basketStyle from './basketStyle.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { clearBasket, getAllCartProductsSelector } from '../../../redux/slices/cartSlice'
import BasketItem from './BasketItem'
import { Louder } from '../../louder/Louder'
import { dogFoodApi } from '../../../api/DogFoodApi'
import { getQueryCartKey } from '../../../utils'
import { getTokenSelector } from '../../../redux/slices/tokenSlice'

export function Basket() {
  const cart = useSelector(getAllCartProductsSelector)
  const token = useSelector(getTokenSelector)
  const navigate = useNavigate()

  useEffect(
    () => {
      if (!token) {
        navigate('/signin')
      }
    },
    [token],
  )

  // const {
  //   data: products, isLoading, isError, error,
  // } = useQuery({
  //   queryKey: getQueryCartKey(cart.lenght),
  //   queryFn: () => dogFoodApi.getProductsByIds(cart.map((product) => product.id)),
  //   enabled: !!token,
  // })
  //   .then((res) => res.json(data))
  // console.log({ products })

  // if (isLoading) return <Louder />

  // if (isError) {
  //   return (
  //     <p>
  //       Произошла ошибка:
  //       {' '}
  //       {error.message}
  //     </p>
  //   )
  // }

  const dispatch = useDispatch()

  const clearBasketHandler = () => {
    dispatch(clearBasket())
  }

  // eslint-disable-next-line max-len
  const isAllBasketPicked = () => products.filter((item) => item.isPicked === true).lenght === products.lenght
  const findAllPickedProduct = () => {
    const allPickedProducts = []
    products.forEach((item) => {
      if (item.isPicked === true) allPickedProducts.push(item)
    })
    return allPickedProducts
  }

  const getBasketProductsById = (idItem) => products.find((product) => product._id === idItem)
  const getBasketStateProductsById = (idItem) => products.find((product) => product.id === idItem)
  // const pickAllProductsHandler = () => {
  //   if (!isAllBasketPicked()) dispatch(pickAllProducts())
  //   else dispatch(notPickAllProducts())
  // }
  const calculateSum = () => findAllPickedProduct().reduce((sum, product) => {
    const updatedSum = sum + product.count * getBasketProductsById(product.id).price
    return updatedSum
  }, 0)

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      {cart[0] && (
      <>
        <ul className="d-flex p-2 flex-wrap align-items-center justify-content-center">
          {cart.map(({ id, ...item }) => (
            <BasketItem
              key={id}
              id={id}
              name={item.name}
              price={item.price}
              pictures={item.pictures}
              wight={item.wight}
              description={item.description}
              checked={item.description}
            />
          ))}
        </ul>
        <button type="button" className="btn btn-primary" onClick={clearBasketHandler}>
          Clear
        </button>
      </>
      )}
    </div>
  )
}

// function Basket() {
// eslint-disable-next-line no-unused-vars
//   const [token, setToken] = useState(() => {
//     const tokenFromStorage = localStorage.getItem('token')
//     return tokenFromStorage ?? ''
//   })

//   useEffect(() => {
//     localStorage.setItem('token', token)
//     dogFoodApi.setToken(token)
//   }, [token])

//   const { basketCounter } = useSelector((state) => state)

//   const {
//     data, isLoading, isError, error, refetch,
//   } = useQuery({
//     queryKey: ['productsfetch'],
//     queryFn: () => fetch('https://api.react-learning.ru/products', {
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     }).then((res) => res.json(data)),
//     enabled: token !== undefined,
//   })

//   if (isLoading) return <Louder />

//   if (isError) {
//     return (
//       <p>
//         Произошла ошибка:
//         {' '}
//         {error.message}
//       </p>
//     )
//   }

//   const clearProductsHandler = () => {
//     console.log('click')
//   }

//   console.log(isLoading, isError, error, refetch)
//   const { products } = data

//   return (
//     <>
//       <div className={basketStyle.buttonWrap}>
//         <button
//           type="button"
//         >
//           Перейти к оплате
//           {' '}
//           {basketCounter}
//           {' '}
//           товаров
//           {' '}
//           {basketCounterReducer}
//         </button>
//         <button
//           onClick={clearProductsHandler}
//           type="button"
//         >
//           Delete
//         </button>
//       </div>
//       <h1 className={basketStyle.h1}>Basket</h1>
//       {products && (
//         <div className={basketStyle.wrap}>
//           {products.map((product) => (
//             <ProductsItem
//               key={product._id}
//               name={product.name}
//               description={product.description}
//               pictures={product.pictures}
//               price={product.price}
//               wight={product.wight}
//             />
//           ))}
//         </div>
//       )}
//     </>
//   )
// }
// export const BasketMemo = memo(Basket)
