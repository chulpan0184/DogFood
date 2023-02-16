/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import { memo, useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
// import { useQuery } from '@tanstack/react-query'
import dogLogo from './images/LogoDog.svg'
import headerStyles from './header.module.css'
import serch from './images/Serch.png'
// import { AppTokenContext } from '../contexts/AppTokenContextProvider'
import { dogFoodApi } from '../../api/DogFoodApi'

function Header() {
  // const { token, setToken } = useContext(AppTokenContext)
  // const { token: tokenValue } = token

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(() => {
    const tokenFromStorage = localStorage.getItem('token')
    return tokenFromStorage ?? ''
  })

  useEffect(() => {
    localStorage.setItem('token', token)
    dogFoodApi.setToken(token)
  }, [token])

  const outHandler = () => {
    setToken('')
  }

  const { basketCounter } = useSelector((state) => state)

  // eslint-disable-next-line no-undef
  // const search = useSelector(getSearchSelector)
  // const {
  //   data, isLoading, isError, error, refetch,
  // } = useQuery({
  //   // eslint-disable-next-line no-undef
  //   queryKey: getQueryKey(search),
  //   queryFn: () => dogFoodApi.getAllProducts(search),
  //   enabled: (token !== undefined) && (token !== ''),
  // })
  // console.log({
  //   data, isLoading, isError, error, refetch,
  // })

  return (
    <header className={headerStyles.wr}>
      <nav>
        <ul className={headerStyles.menu}>
          <li>
            <Link to="/">
              <div><img src={dogLogo} alt="dogLogo" /></div>
              DogFoot
            </Link>
          </li>
          <li>
            {/* <button className={headerStyles.button} type="submit">
              <img className="img__serch" src={serch} alt="serch" />
            </button> */}
          </li>
          <li>
            <input type="text" src={serch} placeholder="serch..." />
          </li>
          <li>
            <NavLink
              className={headerStyles.basketNavLink}
              to={token ? '/basket' : 'Signin'}
            >
              Basket
              <div className={headerStyles.basketCounter}>{basketCounter}</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.activLink]: isActive })}
              to="Signin"
            >
              Signout
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={outHandler}
              className={({ isActive }) => classNames({
                [headerStyles.activLink]: isActive,
              })}
              to={token ? 'products' : 'Signin'}
            >
              Signin
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.activLink]: isActive })}
              to="/signup"
            >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.activLink]: isActive })}
              to={token ? '/products' : 'Signin'}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export const HeaderMemo = memo(Header)
