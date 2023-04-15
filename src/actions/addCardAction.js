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

export{ addCard, changeTop }