import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL ='FETCH_SMURFS_FAIL';

export const SMURFS_POST = 'SMURF_POST';
export const SMURFS_POST_SUCCESS = 'SMURF_POST_SUCCESS';
export const SMURFS_POST_ERROR = 'SMURF_POST_ERROR';

export const NEW_SMURF_NAME = 'NEW_SMURF_NAME';
export const NEW_SMURF_AGE = 'NEW_SMURF_AGE';
export const NEW_SMURF_HEIGHT = 'NEW_SMURF_HEIGHT'

export const  getData = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START});
    axios
        .get('http://localhost:3333/smurfs/')
        .then(response => 
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data}))
            .catch(error => dispatch({type:FETCH_SMURFS_FAIL, payload: error}))          
}

export const newSmurf = () => dispatch => {
    dispatch({type: SMURFS_POST});
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
        dispatch({ type: SMURFS_POST_SUCCESS, payload:response.data});
    })
    .catch(err => {
        dispatch({ type: SMURFS_POST_ERROR});
    });
};


export const handleName = evt => {
    return {type: NEW_SMURF_NAME, payload: evt.target.value};
};

export const handleAge = evt => {
return {type: NEW_SMURF_AGE, payload: evt.target.value};
};

export const handleHeight = evt => {
    return{type: NEW_SMURF_HEIGHT, payload: evt.target.value}
}