/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import { memo, useContext } from 'react'
import dogLogo from './images/LogoDog.svg'
import headerStyles from './header.module.css'
import serch from './images/Serch.png'
import { AppTokenContext } from '../contexts/AppTokenContextProvider'

function Header() {
  const { token, setToken } = useContext(AppTokenContext)
  // const { token: tokenValue } = token

  const outHandler = () => {
    setToken('')
  }

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
            <button className={headerStyles.button} type="submit">
              <img className="img__serch" src={serch} alt="serch" />
            </button>
          </li>
          <li>
            <input type="text" src={serch} placeholder="serch" />
          </li>
          <li>
            <NavLink
              onClick={outHandler}
              className={({ isActive }) => classNames({
                [headerStyles.activLink]: isActive,
              })}
              to="/signin"
            >
              { token ? 'Signout' : 'Signin' }
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
