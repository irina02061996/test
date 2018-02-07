
export class AuthService {

  isLoggedIn = false;

  // Возвращает данные поля isLoggedIn
  // НО вернем его с помощью Promise -
  // возвращаем асинхронный код -
  // эмулируем поход на сервер

  isAuth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
