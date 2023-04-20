const cardsCollection = {
    newCard: JSON.parse(localStorage.getItem('cards')) || [],
    activeCard: JSON.parse(localStorage.getItem('activeCard')) || {}
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
            localStorage.setItem('activeCard', JSON.stringify(topCard))
            return{
                ...state,
                activeCard: topCard //ett nytt kortobjekt, tänkt att skriva över objektet i activeCard
            }
        case 'DELETE_CARD':
            let stateArray = [...state.newCard];
            let activeCard = {...state.activeCard};
            console.log(activeCard);
            console.log(stateArray);
            for (let i = 0; i < stateArray.length; i++) {
                const card = stateArray[i];
                card.cardnumber==action.payload.cardnumber
                ? stateArray.splice(i, 1)
                : null
            }
            console.log(stateArray);
            if (activeCard.cardnumber==action.payload.cardnumber) //tar bort activecard om kortet är detsamma
            { 
                localStorage.removeItem('activeCard')
                activeCard = {} //tömmer även activeCard-variabeln så den tömmer i state
            }
            localStorage.setItem('cards', JSON.stringify(stateArray))
            return{
                ...state,
                newCard: stateArray,
                activeCard: activeCard
            }
        default: return state;
    }
}

export {addNewCard}