import * as types from '../constants/ActionTypes'
import * as apiurls from '../constants/Urls'
import fetch from 'isomorphic-fetch'

function receiveGyms(json) {
  return {
    type: types.RECEIVE_GYMS,
    gyms: json,
    receivedAt: Date.now()
  }
}

function receiveGym(gym_id, json) {
    return {
        type: types.RECEIVE_SINGLE_GYM,
        gym_id,
        gym: json,
        receivedAt: Date.now()
    }
}

function postComment(json) {
    return {
        type: types.COMMENT,
        comment: json,
        receivedAt: Date.now()
    }
}

function sendComment(gym_id, name, comment) {
    return dispatch => {
        return fetch(apiurls.COMMENT_URL+gym_id, {
            method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                posted_by: name,
                comment: comment
            })
        })
        .then(response => response.json())
        .then(json => dispatch(postComment(json)))
    }
}
function fetchGyms() {
  return dispatch => {
    return fetch(apiurls.SEARCH_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveGyms(json)))
  }
}

function fetchGym(gym_id) {
  return dispatch => {
    return fetch(apiurls.GYM_URL+gym_id)
        .then(response => response.json())
        .then(json => dispatch(receiveGym(gym_id, json)))
  }
}

export function fetchGymsIfNeeded() {
  return (dispatch, getState) => {
      return dispatch(fetchGyms())
  }
}

export function fetchGymIfNeeded(gym_id) {
  return (dispatch, getState) => {
    return dispatch(fetchGym(gym_id))
  }
}

export function newComment(gym_id, name, comment){
    return (dispatch, getState) => {
        return dispatch(sendComment(gym_id, name, comment))
    }
}