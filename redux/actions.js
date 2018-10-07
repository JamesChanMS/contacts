/**
 * actions 只关心与action相关的属性 types and action creators
 */

import {login} from '../api'

// action types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const LOG_IN_SENT = 'LOG_IN_SENT'
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'
export const CHAN_FIRST_CONTACT = 'CHAN_FIRST_CONTACT'

// action  creators
/**
 * 更新用户的action方法
 * @param update
 */
export const updateUser = update => ({
    type: UPDATE_USER,
    payload: update,
})

/**
 * 新增用户的action方法
 * @param newContact
 */
export const addContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact,
})

/**
 * 改变第一位用户
 */
export const changeFirstContact = () => ({
    type: CHAN_FIRST_CONTACT,
})

// async action creator
/**
 * promise 语法
 */
// export const loginUser = (username, password) => dispatch => {
//     dispatch({type: LOG_IN_SENT})
//     login(username, password).then(token => {
//         dispatch({type: LOG_IN_FULFILLED, payload: token})
//     }).catch(err => {
//         dispatch({type: LOG_IN_REJECTED, payload: err.message})
//     })
// }

/**
 * 用户登录的action方法
 * async 语法
 * @param username
 * @param password
 */
export const logInUser = (username, password) => async dispatch => {
    dispatch({type: LOG_IN_SENT})
    try {
        const token = await login(username, password)
        dispatch({type: LOG_IN_FULFILLED, payload: token})
    } catch (err) {
        dispatch({type: LOG_IN_REJECTED, payload: err.message})
    }
}