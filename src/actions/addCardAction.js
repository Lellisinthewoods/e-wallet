export default function addCard(value){
    console.log(value)
    return{
        type: 'ADD_CARD',
        payload: value
    }
}