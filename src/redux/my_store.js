import messagesReducer from './reducers/messagesReducer';
import profileReducer from './reducers/profileReducer';

export let store = {
    // data:
    _state: {
        messagesPage: {
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
                {message:'new message right', id: 16},
                {message:'one more message right', id: 6},
                {message:'and some more: ', id: 8},
                {message:'left', id: 9},
                {message:'right', id: 10},
                {message:'left left left left left left left left left left left left left left left left left left left left ', id: 11},
                {message:'right', id: 12},
                {message:'.', id: 14},
            ],
            newMessagetext: '',
        },
        newsPage: {
            newsPostsData: [
                {number:"1", message:"It's my first post! I'm really so happy to do it", id: 1},
                {number:"2", message:"It's my second post. Do this post it's OK", id: 2},
                {number:"3", message:"It's my thirth post. It's becoming boring.", id: 3},
                {number:"4", message:"It's time to stop!", id: 4},
            ],  
        },
        profilePage: {
            profilePostsData: [
                {number:"1", message:"Profile! It's my first post! I'm really so happy to do it", id: 1},
                {number:"2", message:"Profile! It's my second post. Do this post it's OK", id: 2},
                {number:"3", message:"Profile! It's my thirth post. It's becoming boring.", id: 3},
                {number:"4", message:"Profile! It's time to stop!", id: 4},
            ],
            newPosttext: '',
        },
        friendsPage: {
            friendsOneFriendData: [
                {name:'Misha', last_message:'I wanna play Dota 2', online:'online'},
                {name:'Sasha', last_message:'I wanna play Dota 2 too', online:'offline'},
                {name:'Masha', last_message:'I wanna play Dota 2 too 2', online:'offline'},
                {name:'Pasha', last_message:'I wanna play Dota 2 too 3', online:'online'},
                {name:'Dashulya', last_message:'I wanna play Dota 2 too 4', online:'online'},
            ],
        },
    },
    // render
    _callSubscriber() {
        console.log('no subscribers (observers)');
    },
    // function for complete _callSubscriber function
    subscribe (observer) {
        this._callSubscriber = observer; //pattern observer
    },
    // get _state
    getState() {
        return this._state;
    },
    // functions for change state and then UI
    dispatch (action) {
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        
        this._callSubscriber(this._state);
    },
}