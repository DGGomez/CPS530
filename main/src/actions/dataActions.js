import axios from 'axios';

export const readAllData = (callback) => async (dispatch) =>{
    try{
        const res = await axios.get(`/readAll`);
        dispatch({
            type: 'ALLFILES',
            payload: res.body
        });
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const readData = (location, callback) => async (dispatch) =>{
    try{
        const res = await axios.get(`/read/${location}`);
        dispatch({
            type: 'ALLFILES',
            payload: res.body
        });
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const purchase = (users, items, quantitys, token, callback) => async (dispatch) =>{
     var purchases = {
         user: users,
         item: items,
         quantity: quantitys
    };
    try{
        const res = await axios.post(`/purchases`, 
         {purchases}
        , {headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-XSRF-TOKEN': token
        }
});
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const ordering = (user, callback) => async (dispatch) =>{
    var purchases = {
        user: user
    };
    try{
        const res = await axios.post(`/orders`, {user}, {headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
});
    console.log(res);
        dispatch({
            type: 'ORDER',
            payload: {
                orderList: res.data
                }
        });
        callback();
    }
    catch(err){
        console.log(err);
    }
};