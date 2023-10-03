import { createContext } from 'react';

export const user = { email: '', password: '', isLoggedIn: false};

export const logOut = () => {
    user.isLoggedIn = false;
}
const AppContext = createContext(
    {
        user,
        logOut,
    }
)

export default AppContext