import Admin from './pages/Admin';
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  DEVICE_ROUTE,
} from './utils/consts';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import DevicePage from './pages/DevicePage';

export const authRoutes = [
  {
    path: ADMIN_ROUTE, // В данном случае по URL админ будет реализована работа админ панели, передаем объект и его путь который указан в папке utils
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket, // Два этих объекта , страница Админа и страница корзины могут использовать только авторизованные пользователи
  },
];

export const publicRoutes = [
  // Здесь уже реализован доступ публичный для всех пользователей которые будут заходить на сайт
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage,
  },
];
