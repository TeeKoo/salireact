import { RECEIVE_GYMS, RECEIVE_SINGLE_GYM, COMMENT } from '../constants/ActionTypes'

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
    case RECEIVE_SINGLE_GYM:
      return Object.assign({}, state, {
        item: action.gym
      })
    case COMMENT:
      return Object.assign({}, state, {
        comment: action.comment
      })
    default:
      return state
  }
}
