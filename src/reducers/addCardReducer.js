const cardsCollection = {
    newCard: JSON.parse(localStorage.getItem('cards')) || [],
    activeCard: {}
}

const addNewCard = (state = cardsCollection, action) => {

    switch(action.type){
        case 'ADD_CARD':
            const addedCard = state.newCard.concat(action.payload); 
            //addedCard = hela newCard+nya kortet
            localStorage.setItem('cards', JSON.stringify(addedCard))
            //vi skickar och skriver över localstorage med addedCard
            return{
                ...state,
                newCard: addedCard
            }
        case 'CHANGE_TOP':
            console.log(action.payload)
            const topCard = action.payload;
            return{
                ...state,
                activeCard: topCard //ett nytt kortobjekt, tänkt att skriva över objektet i activeCard
            }
        case 'DELETE_CARD':
            let stateArray = state.newCard;
            console.log(stateArray);
            for (let i = 0; i < stateArray.length; i++) {
                const card = stateArray[i];
                card.cardnumber==action.payload.cardnumber
                ? stateArray.splice(i, 1)
                : null
            }
            console.log(stateArray);
            localStorage.setItem('cards', JSON.stringify(stateArray))
            //måste vi returnera som vi gör i addcard-funktionen?
            //den uppdaterar men re-renderar inte
            break;
        default: return state;
    }
}

export {addNewCard}