const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogsData: [
        {name:'Misha', id: 1},
        {name:'Sasha', id: 2},
        {name:'Masha', id: 3},
        {name:'Pasha', id: 4},
        {name:'Dashulya', id: 5},
    ],
    messagesData: [
        {message:'Hello', id: 1},
        {message:"Hi, what's up man?", id: 2},
        {message:'I wanna play DOTA 2', id: 3},
        {message:"Oh you wanna spin someone's guts, about 20 minutes", id: 4},
        {message:"Yeah it's what i really thought about", id: 5},
        {message:'new message left', id: 7},
        {message:'new message right', id: 6},
        {message:'one more message right', id: 8},
        {message:'and some more: ', id: 10},
        {message:'left', id: 9},
        {message:'right', id: 12},
        {message:'left left left left left left left left left left left left left left left left left left left left ', id: 11},
        {message:'right', id: 14},
        {message:'.', id: 16},
    ],
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                message: action.text,
                id: 0
            };
    
            let lastid = 0;
            for(let i = 1; i < state.messagesData.length + 1; i++){
                if(state.messagesData[state.messagesData.length - i].id % 2 === 0){
                    lastid = state.messagesData[state.messagesData.length - i].id;
                    break;
                }
            }
    
            let newId = lastid + 2;
            newMessage.id = newId;

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        default:
            return state;
    }
}

export const addMessageCreateAction = (text) => ({type: 'ADD_MESSAGE', text});

export default messagesReducer;