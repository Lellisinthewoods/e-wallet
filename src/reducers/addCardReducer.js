const cardsCollection = {
    newCard: [],
}

const addNewCard = (state = cardsCollection, action) => {
    switch(action.type){
        case 'ADD_CARD':
            const addedCard = state.newCard.concat(action.payload);
            return{
                ...state,
                newCard: addedCard
            }
        default: return state;
    }
}

export {addNewCard}