const cardsCollection = {
    newCard: JSON.parse(localStorage.getItem('cards')) || [],
    activeCard: {}
}

//TA BORT KORT:
// HÄMTA HELA LOCALSTORAGE
//SPARA SOM EN ARRAY
//LOOPA IGENOM ARRAYEN EFTER NÅT VÄRDE I OBJEKTET
//TA BORT OBJEKTET (pull? eller nån funktion som tar bort saker ur arrayer)
//skicka tillbaka arrayen utan objektet till localstorage. 
//profit

const addNewCard = (state = cardsCollection, action) => {

    console.log(cardsCollection.activeCard)
    switch(action.type){
        case 'ADD_CARD':
            const addedCard = state.newCard.concat(action.payload);
            localStorage.setItem('cards', JSON.stringify(addedCard))
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
        case 'UPDATE_LOCALSTORE':
            console.log("i reducern");
            console.log(state.newCard);
            //
            break;
        default: return state;
    }
}

export {addNewCard}