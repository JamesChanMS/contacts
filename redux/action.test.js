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

describe('logInUser returns actions',  () => {
    // const dispatch = () => {
    //
    // }

    it('dispatches LOG_IN_SENT',async () => {
        const mockDispatch = jest.fn()
        await actions.logInUser('', '')(mockDispatch)
        // all the args that the mock fn was invoked on
        // mockDispatch.mock.calls
        console.log(mockDispatch.mock.calls);
        expect(mockDispatch.mock.calls[0][0]).toBe({type:actions.LOG_IN_SENT})
    })
})