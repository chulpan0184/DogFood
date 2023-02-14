/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */

// import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productsitemStyle from './productsitem.module.css'
// import { COUNTER_INCREMENT } from '../../../../redux/type'
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../../../../redux/type'

export function ProductsItem({
  products, name, price, pictures, description, wight,
}) {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(true)
  const { basketCounter } = useSelector((state) => state)
  console.log(basketCounter)

  const checkHandler = () => {
    if (checked) {
      dispatch({
        type: COUNTER_INCREMENT,
      })
    } else {
      dispatch({
        type: COUNTER_DECREMENT,
      })
    }
    setChecked(!checked)
  }

  // setChecked(!checked)

  return (
    <div className={productsitemStyle.wrapper}>
      <div className={productsitemStyle.card}>
        <div className={productsitemStyle.cardWr}>
          <p>{products}</p>
          <h6>{name}</h6>
          <img width="200px" height="100px" src={pictures} />
          <p>
            цена:
            {' '}
            {price}
            {' '}
            {' '}
            руб.
          </p>
          <p>
            Описание:
            {' '}
            {description}
          </p>
          <p>
            Вес:
            {' '}
            {wight}
          </p>
          <input
            type="checkbox"
            defaultChecked={!checked}
            onChange={checkHandler}
          />
          {/*  */}
        </div>
      </div>
    </div>
  )
}

// <>
//   <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
//     <div>Products...</div>
//     <div className="d-flex align-items-center">
//       <div>{products}</div>
//       <img src={pictures} />
//       <p>{products}</p>
//       <p>{name}</p>
//       <p>{price}</p>
//       <p>{description}</p>
//       <p>{wight}</p>
//     </div>
//   </div>
//   <div>{products}</div>
// </>
