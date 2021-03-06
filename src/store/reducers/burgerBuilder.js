import * as actionTypes from "../actions/actionTypes";

const initialState = {
    ingredients: null,
    // {
    //     // salad: 0,
        // bacon: 0,
        // cheese: 0,
        // meat: 0,
        // mayo: 0,
        // ketchup: 0,
    // },
    totalPrice: 4,
    error: false
}

const INGREDIENT_PRICES = {
    cheese: 0.5,
    salad: 0.4,
    meat: 1.3,
    bacon: 0.7,
    mayo: 0.1,
    ketchup: 0.1,
  };

const reducer = (state = initialState, action) => {
    console.log(state);
    console.log(action);
switch(action.type){
    case actionTypes.ADD_INGREDIENT:
    return{
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    case actionTypes.REMOVE_INGREDIENT:
        return{
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] -  1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        };
        case actionTypes.SET_INGREDIENTS:
            console.log(action.ingredients)

            return{
                ...state,
                ingredients:// action.ingredients,
                {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat:action.ingredients.meat,
                    mayo: action.ingredients.mayo,
                    ketchup: action.ingredients.ketchup
                },
                error: false
            
            

            }
            case actionTypes.FETCH_INGREDIENTS_FAILED:
                return{
                    ...state,
                    error: true
                }
    default:
        return{...state}
    }
    
}

export default reducer;