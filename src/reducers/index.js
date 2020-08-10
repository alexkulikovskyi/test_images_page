import {combineReducers} from 'redux'
import {photoReducer} from './photo'

export const rootReducer = combineReducers({
    photo: photoReducer
})