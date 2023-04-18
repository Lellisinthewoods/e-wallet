function addCard(value){
    console.log(value)
    return{
        type: 'ADD_CARD',
        payload: value
    }
}

function changeTop(value){
    console.log(value)
    return{
        type: 'CHANGE_TOP',
        payload: value
    }
}

function updateLocalStore(){ //TEST. HÄMTAR KORTET FRÅN FORM.
    console.log("i updatelocalstore");
    return{
        type: 'UPDATE_LOCALSTORE'
    }
}


export{ addCard, changeTop, updateLocalStore }