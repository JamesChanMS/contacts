const fetch = require('isomorphic-fetch')

/**
 * 异步调用 登录
 * @returns {Promise.<void>}
 */
const login = async (username, password) => {
    console.log(username, password);
    const response = await fetch('http://192.168.0.5:3000', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
    // console.log(response);
    /**
     * 登录成功
     */
    if (response.ok) {
        return true
    }
    /**
     * 等待一个异步方法执行完成 返回错误信息
     */
    const errMessage = await response.text()
    throw new Error(errMessage);
}

// action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer
        this.state = initialState
    }

    getState() {
        return this.state
    }

    dispatch(action) {
        if (typeof action === 'function') {
            action(this.dispatch.bind(this))
        } else {
            console.log('received an action : ', action.type);
            this.state = this.reducer(this.state, action)
        }
    }
}

// 默认状态
const DEFAULT_STATE = {user: {}, contacts: []}

// 合并方法
const merge = (prev, next) => Object.assign({}, prev, next)

// 联系人集合处理方法
const contactsReducer = (state, action) => {
    if (action.type === UPDATE_CONTACT) {
        return [...state, action.payload]
    }
    return state
}

// 单个联系人处理方法
const userReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_USER:
            return merge(state, action.payload);
        case UPDATE_CONTACT:
            return merge(state, {prevContact: action.payload});
        case 'LOG_IN_SUCCESS':
            return merge(state, {token: 'fakeToken'});
        default:
            return state;
    }

    /**
     * 出现2次以上判断 建议使用switch 更为简洁
     */
    // if (action.type === UPDATE_USER) {
    //     return merge(state, action.payload)
    // }
    // if (action.type === UPDATE_CONTACT) {
    //     return merge(state, {prevContact: action.payload})
    // }
    // if (action.type === 'LOG_IN_SUCCESS') {
    //
    // }
    return state
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
const reducer = (state, action) => ({

    user: userReducer(state.user, action),
    contacts: contactsReducer(state.contacts, action),

})

/**
 * 更新用户的action方法
 * @param update
 */
const updateUser = update => ({
    type: UPDATE_USER,
    payload: update,
})

/**
 * 新增用户的action方法
 * @param newContact
 */
const addContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact,
})

// async action creator
const loginUser = (username, password) => dispatch => {
    dispatch({type: 'LOG_IN_SENT'})
    login(username, password).then(() => {
        dispatch({type: 'LOG_IN_SUCCESS'})
    }).catch(err => {
        dispatch({type: 'LOG_IN_REJECTED'})
    })
}

// loginUser() // returns dispatch => {}

const store = new Store(reducer, DEFAULT_STATE);

store.dispatch(loginUser('username', '123'))

// store.dispatch(loginUser())
// store.dispatch(updateUser({foo: 'foo'}));
// store.dispatch(updateUser({bar: 'bar'}));
// store.dispatch(updateUser({bar: 'baz'}));
//
// store.dispatch(addContact({'username': 'john', 'password': 'code'}));
// store.dispatch(addContact({'username': 'john', 'password': 'code'}));
// store.dispatch(addContact({'name': 'james', 'number': '18758263492'}));

console.log(store.getState());