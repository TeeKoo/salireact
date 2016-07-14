import { RECEIVE_GYMS } from '../constants/ActionTypes'

const initialState = [
  {
    items: []
  }
]

export default function gyms(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_GYMS:
      return Object.assign({}, state, {
        items: action.gyms
      })
    default:
      return state
  }
}
