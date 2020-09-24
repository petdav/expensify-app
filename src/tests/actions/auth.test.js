import { login, logout, startLogout, startLogin } from '../../actions/auth';

test('should setup login auth action object', () => {
    const action = login('123abc');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123abc'
    });
});

test('should setup logout auth action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});