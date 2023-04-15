const cardsCollection = {
    newCard: [],
    activeCard: []
}

const addNewCard = (state = cardsCollection, action) => {
    switch(action.type){
        case 'ADD_CARD':
            const addedCard = state.newCard.concat(action.payload);
            return{
                ...state,
                newCard: addedCard
            }
        case 'CHANGE_TOP':
            console.log(action.payload)
            const topCard = action.payload;
            return{
                ...state,
                activeCard: topCard
            }
        default: return state;
    }
}

export {addNewCard}