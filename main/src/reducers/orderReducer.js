export default function(state = {}, action) {
    switch(action.type) {
        case 'ORDER':
            return {
                ...state,
                orderList: action.payload.orderList,
            };
        default:
            return state;
    }
};