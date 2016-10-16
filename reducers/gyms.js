import { RECEIVE_GYMS, RECEIVE_SINGLE_GYM, COMMENT, LIKE, DISLIKE } from '../constants/ActionTypes'

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
    case LIKE:
      return Object.assign({}, state, {
        like: action.like
      })
    case DISLIKE:
      return Object.assign({}, state, {
        like: action.like
      })
    default:
      return state
  }
}
