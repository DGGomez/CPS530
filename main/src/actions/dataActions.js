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