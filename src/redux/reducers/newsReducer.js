let initialState = {
    newsPostsData: [
        {number:"1", message:"It's my first post! I'm really so happy to do it", id: 1},
        {number:"2", message:"It's my second post. Do this post it's OK", id: 2},
        {number:"3", message:"It's my thirth post. It's becoming boring.", id: 3},
        {number:"4", message:"It's time to stop!", id: 4},
    ],
};

const newsReducer = (state = initialState, action) => {
    return state;
}

export default newsReducer;