/* eslint-disable linebreak-style */
/* eslint-disable no-lone-blocks */

import { useQuery } from '@tanstack/react-query'
import { memo, useState, useEffect } from 'react'
// import { dogFoodApi } from '../../../api/DogFoodApi'
// import { AppTokenContext } from '../../contexts/AppTokenContextProvider'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Louder } from '../../louder/Louder'
import { ProductsItem } from './ProductsItem/ProductsItem'
// import { withQuery } from '../../HOCs/withQuery'
import { dogFoodApi } from '../../../api/DogFoodApi'
import productsStyle from './productsStyle.module.css'
import { DELETE_ALL_PRODUCTS } from '../../../redux/type'

// const ProductsWithQuery = withQuery(Products)

function Products() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(() => {
    const tokenFromStorage = localStorage.getItem('token')
    return tokenFromStorage ?? ''
  })

  const navigate = useNavigate()
  useEffect(
    () => {
      if (!token) {
        navigate('/signin')
      } else {
        localStorage.setItem('token', token)
        dogFoodApi.setToken(token)
      }
    },
    [token],
  )

  const { basketCounter } = useSelector((state) => state)
  const dispatch = useDispatch()

  const {
    data, isLoading, isError, error, refetch,
  } = useQuery({
    queryKey: ['productsfetch'],
    queryFn: () => fetch('https://api.react-learning.ru/products', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json(data)),
    // dogFoodApi.getAllProducts()
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

  const addBasketProductsHendler = () => {
    navigate('/basket')
  }

  const clearProductsHandler = () => {
    dispatch({
      type: DELETE_ALL_PRODUCTS,
    })
  }

  console.log(isLoading, isError, error, refetch)
  const { products } = data

  return (
    <>
      <div>
        <button
          onClick={addBasketProductsHendler}
          type="button"
        >
          Добавить в карзину:
          {' '}
          {basketCounter}
        </button>
        <button
          onClick={clearProductsHandler}
          type="button"
        >
          Delete
        </button>
      </div>
      <h1 className={productsStyle.h1}>Products</h1>
      {products && (
        <div className={productsStyle.wrap}>
          {products.map((product) => (
            <ProductsItem
              key={product._id}
              id={product._id}
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
export const ProductsMemo = memo(Products)

// const ProductsInnerWithQuery = withQuery(ProductsInner)

//   const res = await fetch(`${this.baseUrl}/products`, {
//     method: 'GET',
//     headers: {
//       authorization: `Bearer ${this.token}`,
//     },
//   })
// Обработка ошибок
//   console.log(res)
// }
