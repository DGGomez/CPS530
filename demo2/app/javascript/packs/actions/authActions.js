import axios from 'axios';

export const RegisterUser = (emailU,passwordU,username,name, token, callback) => async(dispatch) =>{
    try{
        var user = {
            email: emailU,
            password: passwordU,
            password_confirmation: passwordU
        }
        let { data } = await axios.post('/users', {user},
            {headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-XSRF-TOKEN': token
            }
            });
        storeAuthToken(data.id);
        dispatch({
            type: 'REGISTER',
            payload:{
                user: data.email,
                token: data.id
            }
        });
        callback();
    }
    catch(err) {
        console.log(err);
    }
};

export const loginUser = (emailU,passwordU, token, callback) => async(dispatch) =>{
    try{
        var user= {
                email: emailU,
                password: passwordU
            }
            
        let { data } = await axios.post('/users/sign_in', {user}, {
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-XSRF-TOKEN': token
        }
});
        storeAuthToken(data.id);
        dispatch({
            type: 'LOGIN',
            payload:{
                user: data.email,
                token: data.id
            }
        });
        callback();
    }
    catch(err) {
        console.log(err);
    }
};

export const tokenLogin = () => async (dispatch) => {
    try {
        let token = await fetchAuthToken();
        if(token) {
            let { data } = await axios({
                method: 'get',
                url: `/token-login`,
                headers: { 'Authorization': `Bearer ${token}` }
            });
            storeAuthToken(data.token);
            dispatch({
                type: 'TOKEN_LOGIN',
                payload: {
                    user: data.user,
                    token: data.token
                }
            });
        } else {
            console.log('no token');
        }
    } catch (error) {
        console.log('getUser error: ', error);
    }
};

export const logoutUser = (callback) => async (dispatch) => {
    try {
        await removeAuthToken();
        dispatch({
            type: 'LOGOUT_USER'
        });
        callback();
    } catch (error) {
        console.log('logoutUser error: ', error);
    }
};

const storeAuthToken = async (token) => {
    try {
        await localStorage.setItem('authToken', JSON.stringify(token));
    } catch (error) {
        console.log('storeAuthToken error', error);
    }
};

const fetchAuthToken = async () => {
    try {
        let token = await localStorage.getItem('authToken');
        return JSON.parse(token);
    } catch (error) {
        console.log('fetchAuthToken error: ', error);
    }
};

export const removeAuthToken = async () => {
    try {
        await localStorage.removeItem('authToken');
    } catch (error) {
        console.log('removeAuthToken error: ', error);
    }
};