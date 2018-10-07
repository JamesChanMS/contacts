import {combineReducers} from 'redux';
// const {combineReducers} =  require('redux');

import {CHAN_FIRST_CONTACT, UPDATE_USER, UPDATE_CONTACT, LOG_IN_SENT, LOG_IN_FULFILLED, LOG_IN_REJECTED} from './actions'

// 合并方法
const merge = (prev, next) => Object.assign({}, prev, next)

// 联系人集合处理方法 (state为空时，初始化[])
const contactsReducer = (state = [], action) => {
    if (action.type === UPDATE_CONTACT) {
        return [...state, action.payload]
    }
    if (action.type === CHAN_FIRST_CONTACT) {
        // de-structure 解析结构
        // return {type} = action
        const [firstContact, ...rest] = state
        if (!firstContact) {
            return state
        }
        const newContact = {...firstContact, name: 'Jonathan wick'}
        return [newContact, ...rest]
    }
    return state
}

// 单个联系人处理方法 (state为空时，初始化)
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return merge(state, action.payload)
        case UPDATE_CONTACT:
            return merge(state, {prevContact: action.payload})
        case LOG_IN_FULFILLED:
            return merge(state, {token: action.payload});
        case LOG_IN_REJECTED:
            return merge(state, {loginErr: action.payload})
        default:
            return state
    }
}

/**
 * 全局处理方法
 * at the core of Redux is the reducer,
 * which handles the logic between receiving the action
 * and updating the state of our application.
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = combineReducers({
    user: userReducer,
    contacts: contactsReducer,
})

export default reducer;