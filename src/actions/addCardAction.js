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

function deleteCard(value){ //TEST.
    console.log("i deleteCard");
    return{
        type: 'DELETE_CARD',
        payload: value
    }
}


export{ addCard, changeTop, deleteCard }