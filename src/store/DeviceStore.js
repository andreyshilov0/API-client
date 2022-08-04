import { makeAutoObservable } from 'mobx';
// Стейт менеджер mobx
export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._device = [];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this); // Данная функция следит за изменениями параметров в данном случае this
  }
  setTypes(types) {
    this._types = types; // Это action подобие как в redux
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevice(device) {
    this._device = device;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    // Геттеры нужны для получения каких либо переменных из состояния, вроде бы так!
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get device() {
    return this._device;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
