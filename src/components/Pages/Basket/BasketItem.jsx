/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import { useDispatch, useSelector } from 'react-redux'
import { changeIsPickProduct, deleteProduct, getAllCartProductsSelector } from '../../../redux/slices/cartSlice'
import basketitemSyle from './basketitem.module.css'

function BasketItem({

  products, name, price, pictures, wight, id, /* description, isPicked, count, stock, */
}) {
  const cart = useSelector(getAllCartProductsSelector)
  const dispatch = useDispatch()
  const deleteProductHandler = () => {
    dispatch(deleteProduct(id))
  }
  const selectProductHandler = () => {
    dispatch(changeIsPickProduct(id))
  }
  // const incrementCountHandler = () => {
  //   if (count < stock) {
  //     dispatch(productIncrement(id))
  //   }
  // }
  // const decrementCountHandler = () => {
  //   if (count > 0) {
  //     dispatch(productDecrement(id))
  //   }
  // }
  const isInCart = (productsListId) => cart.find((product) => product.id === productsListId)

  return (
    <div className={basketitemSyle.wrapper}>
      <div className={basketitemSyle.card}>
        <div className={basketitemSyle.cardWr}>
          <p>{products}</p>
          <div style={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            minHeight: '50px',
          }}
          >
            <h6>{name}</h6>
          </div>
          <div style={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
          >
            <img style={{ borderRadius: '8px' }} width="250px" height="150px" src={pictures} />
          </div>
          <p>
            цена:
            {' '}
            {price}
            {' '}
            {' '}
            руб.
          </p>
          <p className="mb-4">
            Вес:
            {' '}
            {wight}
          </p>
          <button className="btn btn-primary mb-3" type="button" onClick={isInCart(id) ? deleteProductHandler : selectProductHandler}>
            {isInCart(id) ? 'Move' : 'In basket'}
          </button>
          <input
            type="checkbox"
          />
        </div>
      </div>
    </div>
  )
}

export default BasketItem
