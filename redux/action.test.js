import * as actions from './actions'

describe('updateUser returns actions', () => {
    it('returns an action', () => {
        expect(actions.updateUser({name: "test name"})).toMatchSnapshot()
    })
    it('handles empty object', () => {
        expect(actions.updateUser({})).toMatchSnapshot()
    })
    it('handles empty name', () => {
        expect(actions.updateUser({name: ""})).toMatchSnapshot()
    })
})

// 单元测试 unit test
// test('updateUser returns an action', () => {
//     expect(actions.updateUser({name: "test name"})).toMatchSnapshot()
// })
// test('updateUser returns an action when passed empty object', () => {
//     expect(actions.updateUser({})).toMatchSnapshot()
// })
// test('updateUser returns an action when passed empty object', () => {
//     expect(actions.updateUser({name: ""})).toMatchSnapshot()
// })

describe('logInUser returns actions', () => {

    const fakeToken = 'thisIsATestToken'
    const errMessage = 'incorrect credentials'

    const mockLogin = (username, password) => {
        if (username === 'u' && password === 'p') {
            return fakeToken
        }
        throw new Error(errMessage)
    }

    // const dispatch = () => {
    //
    // }

    /**
     * 登录请求
     */
    it('dispatches LOG_IN_SENT', async () => {
        const mockDispatch = jest.fn()
        await actions.logInUser('', '')(mockDispatch)
        // all the args that the mock fn was invoked on
        // mockDispatch.mock.calls
        console.log(mockDispatch.mock.calls);
        /**
         *  toBe 匹配引用地址
         *  toEqual 匹配具体的值
         */
        expect(mockDispatch.mock.calls[0][0]).toEqual({type: actions.LOG_IN_SENT})
    })

    /**
     * 登录成功
     */
    it('dispatches LOG_IN_FULFILLED with correct credentials', async () => {
        const mockDispatch = jest.fn()
        await actions.logInUser('u', 'p', mockLogin)(mockDispatch)
        expect(mockDispatch.mock.calls[1][0]).toEqual({
            type: actions.LOG_IN_FULFILLED,
            payload: fakeToken
        })
        expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
    })

    /**
     * 登录失败
     */
    it('dispatches LOG_IN_REJECTED with incorrect credentials', async () => {
        const mockDispatch = jest.fn()
        await actions.logInUser('', 'p', mockLogin)(mockDispatch)

        expect(mockDispatch.mock.calls[1][0]).toEqual({
            type: actions.LOG_IN_REJECTED,
            payload: errMessage
        })
        expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
    })
})