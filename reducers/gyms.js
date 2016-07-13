import { RECEIVE_GYMS } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function gyms(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_GYMS:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]
    default:
      return state
  }
}
