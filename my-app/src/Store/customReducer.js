// import { type } from "@testing-library/user-event/dist/type";

const defaulState = {
    customers: []
};

const ADD__MANY__CUSTOMERS = "Add__Many__Custom"


export const customerReducer = (state = defaulState, action) => {
    switch (action.type) {
        case ADD__MANY__CUSTOMERS:
            return {
                ...state, customers: [...state.customers, ...state.payload]
            }

        case "addCustom":
            return {
                ...state,
                customers: [...state.customers, action.payload]
            };
        case "removeCustom":
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.payload)
            };


        default:
            return state;
    }
};

export const addCustomerAction = (payload) => ({ type: "addCustom", payload })
export const removeCustomerAction = (payload) => ({ type: "removeCustom", payload })
