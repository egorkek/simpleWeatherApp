const initialState={

}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_WEATHER':
        return {
                ...state,
                ...action.payload
        }
        case 'FIND_CURRENT_CITY':
        return{
            ...state,
            ...action.payload
        }

        


        default:
        return state;
    }

} 