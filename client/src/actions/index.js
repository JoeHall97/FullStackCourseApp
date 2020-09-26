import axios from 'axios';
import { FETCH_USER } from './types';

/* Login action */
// ASYNC AWAIT SOLUTION FOR JS VERSION >= ES2017
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

// PROMISE SOLUTION FOR JS VERSIONS < ES2017
/*export const fetchUser = () => {
    return function(dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, playload: res.data}));
    }
};*/

/* Payment action */
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data});
};