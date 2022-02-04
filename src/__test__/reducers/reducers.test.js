import reducer from "../../reducers";
import ProductMock from "../../__mocks__/ProductMock";

describe('Reducers', () => {
  test('Retonar el estado inicial', () => {
    expect(reducer({}, '')).toEqual({});
  })
  test('ADD TO CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: "ADD_TO_CART",
      payload,
    };
    const expected = {
      cart: [
        ProductMock
      ]
    };
    expect(reducer(initialState, action)).toEqual(expected);
  })
  test('REMOVE FROM CART', () => {
    const initialState = {
      cart: [
        ProductMock
      ]
    };
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload
    }
    const expected = {
      cart: []
    }
    expect(reducer(initialState, action)).toEqual(expected);
  })
})