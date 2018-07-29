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

    dispatch(update) {
        this.state = this.reducer(this.state, update)
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
    if (action.type === UPDATE_USER) {
        return merge(state, action.payload)
    }
    if (action.type === UPDATE_CONTACT) {
        return merge(state, {prevContact: action.payload})
    }
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

const store = new Store(reducer, DEFAULT_STATE);
store.dispatch(updateUser({foo: 'foo'}));
store.dispatch(updateUser({bar: 'bar'}));
store.dispatch(updateUser({bar: 'baz'}));

store.dispatch(addContact({'username': 'john', 'password': 'code'}));
store.dispatch(addContact({'username': 'john', 'password': 'code'}));
store.dispatch(addContact({'name': 'james', 'number': '18758263492'}));

console.log(store.getState());