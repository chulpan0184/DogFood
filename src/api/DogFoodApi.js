/* eslint-disable linebreak-style */
class DogFoodApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl

    this.token = ''
  }

  getAuthorizationHeader() {
    return `Bearer ${this.token}`
  }

  setToken(token) {
    this.token = token
  }

  checkToken() {
    if (!this.token) throw new Error('Отсутствует токен')
  }

  async Signin(values) {
    const res = await fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    if (res.status === 401) {
      throw new Error(
        `Авторизация не пройдена непраильный логин или пароль. Status: ${res.status}`,
      )
    } if (res.status === 404) {
      throw new Error(`Авторизация не пройдена пользователь не найден. Status: ${res.status}`)
    } if (res.status >= 300) {
      throw new Error(`Ошибка. Status: ${res.status}`)
    }
    return res.json()
  }

  // async Signup() {}

  async getAllProducts() {
    this.checkToken()
    const res = await fetch(`${this.baseUrl}/products`, {
      headers: {
        authorization: this.getAuthorizationHeader(),
      },
    })
    // Обработка ошибок
    console.log(res)
  }

  async getProductById(ProductId) {
    this.checkToken()
    const res = await fetch(`${this.baseUrl}/products/${ProductId}`, {
      headers: {
        authorization: this.getAuthorizationHeader(),
      },
    })
    // Обработка ошибок
    console.log(res)
  }

  // async getProductsByIds() {
//      this.checkToken()
//   }
}

export const dogFoodApi = new DogFoodApi({ baseUrl: 'https://api.react-learning.ru' })
