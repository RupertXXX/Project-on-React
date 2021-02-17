const lol = "lol";

let initialState = {
    groups: [
        {name: "group 1", id: 1},
        {name: "group 2", id: 2},
    ],
    groupsCount: 2,
    url: null,
};

const groupsReducer = (state = initialState, action) =>{
    switch (action.type){
        case lol:
            let id = state.groups[state.groups.length - 1].id + 1;
            let obj = {name: "group 3", id};

            return {
                ...state,
                groups: [...state.groups, obj],
            }
        default:
            return state;
    }
}

export default groupsReducer;

export const lolCreator = () => ({type: "lol" });