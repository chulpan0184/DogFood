/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { memo, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { createSigninFormValidationSchema } from './validatorSignin'
import { dogFoodApi } from '../../../api/DogFoodApi'
// import { AppTokenContext } from '../../contexts/AppTokenContextProvider'

const initialValues = {
  email: '',
  password: '',
}

function Signin() {
  // const { token, setToken } = useContext(AppTokenContext)
  const [token, setToken] = useState(() => {
    const tokenFromStorage = localStorage.getItem('token')
    return tokenFromStorage ?? ''
  })

  useEffect(() => {
    localStorage.setItem('token', token)
    dogFoodApi.setToken(token)
  }, [token])

  const navigate = useNavigate()
  console.log(token)

  // eslint-disable-next-line no-unused-vars
  const { mutateAsync, isError, error } = useMutation({
    mutationFn: (values) => dogFoodApi.Signin(values).then((res) => {
      setToken(res.token)
      // if (res.status === 401) {

      //       throw new Error(`Авторизация не пройдена непраильный логин или пароль. Status: ${res.status}`)
      //     } else if (res.status !== 401) {
      //       navigate('/products')
      //     }
      //     return res.json()
    }),
  })

  // console.log(isError, error)

  const submitHandler = async (values) => {
    await mutateAsync(values)
    setTimeout(() => navigate('/products'))
    // navigate('/products')
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createSigninFormValidationSchema}
      onSubmit={submitHandler}
    >
      <Form>
        <Field name="email" placeholder="Email" type="email" />
        <ErrorMessage component="p" className="error" name="email" />

        <Field name="password" placeholder="password" type="password" />
        <ErrorMessage component="p" className="error" name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export const SigninMemo = memo(Signin)
// const {
//   data, isLoading, isError, error, refetch,
// } = useQueries({
//   queryKey: ['UserListfetch'],
//   queryFn: () => fetch('https://https://api.react-learning.ru/signin').then((res) => res.json()),
// })

// console.log({
//   data, isLoading, isError, error, refetch,
// })

// const submitHandler = (values) => {
//   console.log({ values })
// }

// export const SigninMemo = React.memo(Signin)
