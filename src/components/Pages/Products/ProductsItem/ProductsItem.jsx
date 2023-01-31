/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */

import productsitemStyle from './productsitem.module.css'

export function ProductsItem({
  products, name, price, pictures, description, wight,
}) {
  return (
    <div className={productsitemStyle.wrapper}>
      <div className={productsitemStyle.card}>
        <p>{products}</p>
        <h3>{name}</h3>
        <img src={pictures} />
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
        <button type="submit">Добавить в карзину</button>
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
