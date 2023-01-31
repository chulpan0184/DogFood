/* eslint-disable linebreak-style */
/* eslint-disable no-lone-blocks */

import { useQuery } from '@tanstack/react-query'
import { memo, useContext } from 'react'
// import { dogFoodApi } from '../../../api/DogFoodApi'
import { AppTokenContext } from '../../contexts/AppTokenContextProvider'
import { Louder } from '../../louder/Louder'
import { ProductsItem } from './ProductsItem/ProductsItem'
// import { withQuery } from '../../HOCs/withQuery'

// onst ProductsWithQuery = withQuery(Products)

function Products() {
  const { token } = useContext(AppTokenContext)
  console.log({ token })
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

  console.log(isLoading, isError, error, refetch)

  const { products } = data

  return (
    <>
      <h1>Products</h1>

      {products && (
        <ul>
          {products.map((product) => (
            <ProductsItem
              // eslint-disable-next-line no-underscore-dangle
              key={product._id}
              name={product.name}
              description={product.description}
              pictures={product.pictures}
              price={product.price}
              wight={product.wight}
            />
          ))}
        </ul>
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
