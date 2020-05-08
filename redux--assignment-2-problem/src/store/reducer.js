import * as actionType from './action'
const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD: 
            let newArr = [...state.persons]
            let newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            }

            return {
                ...state,
                persons: newArr.concat(newPerson)

            }
        

        case actionType.DELETE: 
            let newArr1=[...state.persons];
            return {
                persons:newArr1.filter(person=>person.id!==action.value)
            }
        
        default:return state
    }
}

export default reducer