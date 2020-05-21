import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    SMURFS_POST,
    SMURFS_POST_SUCCESS,
    SMURFS_POST_ERROR,
    NEW_SMURF_NAME,
    NEW_SMURF_AGE,
    NEW_SMURF_HEIGHT
} from '../actions/actions.js'

console.log(FETCH_SMURFS_SUCCESS.payload)

const initialState = {
    smurfs: [],
    error: false,
    isFetching: false,
    isPosting: false,
    postSuccess: false,
    newSmurf: {
        name: '',
        height: '',
        age: 0
    }
};


export const reducer = (state = initialState, action) => {
    /* console.log('reducer', action); */
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
            case FETCH_SMURFS_SUCCESS:
                return {
                    ...state,
                    houses:action.payload,
                    isFetching:false,
                    error:'',
                    smurfs: action.payload
                };
                case FETCH_SMURFS_FAIL:
                    return {
                        ...state, 
                        isFetching: false,
                        error: action.payload
                    };
                    case SMURFS_POST:
                        return {
                            ...state,
                            isPosting: false,
                            postSuccess: true,
                            error: ''
                        };
                        case SMURFS_POST_SUCCESS:
                            return {
                                ...state,
                                isPosting: false,
                                postSuccess: true,
                                error: ''
                            };
                            case SMURFS_POST_ERROR:
                                return {
                                    ...state,
                                    isPosting: false,
                                    postSucess: false,
                                    error: action.payload
                                }
                                case NEW_SMURF_NAME:
                                    return {
                                        ...state,
                                        newSmurf: {
                                            ...state.newSmurf, name: action.payload
                                        }
                                    }
                                    case NEW_SMURF_AGE:
                                        return {
                                            ...state,
                                            newSmurf: {...state.newSmurf, age:Number(action.payload)}
                                        }
                                        case  NEW_SMURF_HEIGHT:
                                            return {
                                                ...state,
                                                newSmurf: {...state.newSmurf, 
                                                    height: action.payload + 'cm'}
                                            }
                    default:
                        return state;
    }
}

export default reducer 