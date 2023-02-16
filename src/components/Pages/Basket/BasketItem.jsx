/* eslint-disable jsx-a11y/alt-text */
import { useDispatch } from 'react-redux'

function BasketItem({
  name, pictures, price, wight, id, description, checked,
}) {
  const dispatch = useDispatch()
  const deleteProductHandler = () => {
    // eslint-disable-next-line no-undef
    dispatch(deleteProduct(id))
  }
  return (
    <div>
      <div>
        <div>
          <h5>{name}</h5>
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
          <button type="button" className="btn btn-primary" onClick={deleteProductHandler}>
            Delete
          </button>
          <input
            type="checkbox"
            defaultChecked={!checked}
          />
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default BasketItem
