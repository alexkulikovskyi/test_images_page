import {photoConstants} from '../constants'
import * as backendData from '../backend/images.json' 

export const photoActions = {
    getData,
    sortData
}

function getFakeRequest() {
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            resolve(backendData.data)
        }, 100)
    })
}

function getData() {
    return dispatch => {
        let requestPromise = getFakeRequest()
        requestPromise.then(function (response) {
			const fullSize = response.map(x=> x['size']).reduce((a,b) => parseFloat(a) + parseFloat(b))
            dispatch(success(response, fullSize))
          })
          .catch(function (error) {
            console.log(error)
          })
    }
}


function sortData(data,typeStatus){
    return dispatch => {
        dispatch(sort(data,typeStatus))
    }
    
}

function success(data,fullSize) { return {type: photoConstants.SET_DATA, data, fullSize}}
function sort(data,typeStatus) { return {type: photoConstants.SORT_DATA, data, typeStatus}}