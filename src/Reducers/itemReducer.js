import { CONSTANT } from 'Actions'

const initialState = {
	items: []
}

export default (state = initialState, action) => {
	switch (action.type) {
    case CONSTANT:
      return {
        ...state
      }
    default:
      return state
  }
}
