// 1. `.jsx` 에서 관리하는 **`cart`**, **`menu`** 상태를 Redux 혹은 Redux Toolkit을 사용하여 전역 상태로 관리해야 합니다.
// 1. `src` 폴더 안에 redux 폴더를 생성합니다.
// 2. `redux.js` 파일을 생성합니다.
// 3. 해당하는 파일 내에서 Redux 혹은 Redux Toolkit을 사용하여 상태를 **전역**으로 관리할 수 있어야 합니다.
// 2.**`cart`**, **`menu`** 전역 상태를 필요한 컴포넌트로 불러와 사용할 수 있어야 합니다.
// 1. **`useSelector`**와 **`useDispatch`**를 사용하세요.
// 3. 부모 컴포넌트(**`App.jsx`**)에서 자식 컴포넌트로 내려주던 상태와 props를 제거합니다.
// 4. css는 자유롭게 수정해도 좋습니다.

import { combineReducers, legacy_createStore } from "redux";
import data from "../assets/data";


export const addToCart = (options, quantity, id) => {
  return {
    type: "addToCart",
    payload: { options, quantity, id },
  };
};

export const removeFromCart = (id) => {
  return {
    type: "removeFromCart",
    payload: { id },
  };
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "addTocart":
      return [...state, action.payload];
    case "removeFromCart":
      return state.filter((el) => action.payload !== el.id);
    default:
      return state;
  }
};

const menuReducer = (state = data.menu, action) => {
  return state;
};

const rootReducer = combineReducers({ cartReducer, menuReducer });

export const store = legacy_createStore(rootReducer);
