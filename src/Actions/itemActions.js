import { CONSTANT } from "Actions"

/**
 * Gets items from API
 * 
 * @async
 */

export const fetchItems = () => async (dispatch) => {
  const action = {
    type: CONSTANT,
    payload: {},
  }
  dispatch(action)
}