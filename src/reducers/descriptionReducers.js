import {DESCRIPTION_STATE} from "./../actions/action-types";

export default (state = {}, action) => {
    switch(action.type) {
        case DESCRIPTION_STATE:
            return action.payload;
        default:
            return state;
    }
}
