import reducer from './reducer';
import * as actions from './actions';

/**
 * initial state
 *
 * @type {{user: {}, contacts: Array}}
 */
const DEFAULT_STATE = {
    user: {},
    contacts: [],
}

describe('contact reducer', () => {
    it('successfully adds new user', () => {
        expect(reducer(DEFAULT_STATE, actions.addContact({
            name: 'test user!',
            phone: '18758263492'
        }))).toMatchSnapshot()
    })
})

describe('contact reducer', () => {
    it('successfully updated user', () => {
        expect(reducer(DEFAULT_STATE, actions.updateUser({
            name: 'test user james',
        }))).toMatchSnapshot()
    })
})