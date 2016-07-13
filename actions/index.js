import * as types from '../constants/ActionTypes'
import * as apiurls from '../constants/Urls'
import fetch from 'isomorphic-fetch'

function requestPosts(gym) {
  return {
    type: types.ADD_TODO,
    gym
  }
}

function receiveGyms(gym, json) {
  return {
    type: types.RECEIVE_GYMS,
    gym,
    gyms: json,
    receivedAt: Date.now()
  }
}

function fetchGyms(gym) {
  return dispatch => {
    dispatch(requestPosts(gym))
    return fetch(apiurls.SEARCH_URL+`${gym}`)
      .then(response => response.json())
      .then(json => dispatch(receiveGyms(gym, json)))
  }
}

export function fetchGymsIfNeeded(gym) {
  return (dispatch, getState) => {
      return dispatch(fetchGyms(gym))
  }
}
