import {photoConstants} from '../constants'

const initialState = {
    data:[],
    clickStatus: {
        name: false,
        size: false,
        modified: false
    },
    fullDataSize: 0
}

export const photoReducer = (state = initialState,action) => {
    switch (action.type){
        case photoConstants.SET_DATA:
            return {...state, data:action.data, fullDataSize: action.fullSize, clickStatus: {...{name: false, size: false, modified: false}}}
        case photoConstants.SORT_DATA:
            return {...state, data:action.data, clickStatus: {...state.clickStatus, ...action.typeStatus}}
        
        default:
           return state
    }
}