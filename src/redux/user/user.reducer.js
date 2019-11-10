import {userActionTypes} from './user.types';

const Initial_State={
    currentUser:null
};

const userReducer=(state=Initial_State,action)=>{
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.payload
            } 
        default:return state;
    }
}

export default userReducer;