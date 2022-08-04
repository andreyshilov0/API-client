import { makeAutoObservable } from 'mobx';
// Стейт менеджер mobx
export default class UserStore {
  constructor() {
    this._isAuth = true; // Нижнее подчеркивание ставится чтобы понимать что переменная изменятся не может
    this._user = {};
    makeAutoObservable(this); // Данная функция следит за изменениями параметров в данном случае this
  }
  setIsAuth(bool) {
    this._isAuth = bool; // Это action подобие как в redux
  }
  setIsUser(user) {
    this._user = user;
  }

  get isAuth() {
    // Геттеры нужны для получения каких либо переменных из состояния, вроде бы так!
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
