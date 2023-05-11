import createDataContext from './createDataContext';
import serverJson from '../api/serverJson';
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'getblogpost':
            console.log(action.payload)
            return action.payload;
        case 'addBlogPost1':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }]
        case 'deleteBlogPost':
            return state.filter(bloddelet => bloddelet.id !== action.payload)
        case 'editBlogPost':
            return state.map((blog) => {
                if (blog.id === action.payload.id) {
                    return action.payload;
                } else {
                    return blog;
                }
            })
        default:
            return state;
    }
}

const getBlogPost= dispatch =>{
    return async ()=>{
     const response=   await serverJson.get('/blogposts');
      console.log("hiiii")
     dispatch({type:'getblogpost',payload:response.data});
    }
}

const addblogpost = (dispatch) => {
    return async(title, content, callback) => {
        await serverJson.post('/blogposts',{title, content})
        // dispatch({ type: "addBlogPost1", payload: { title, content } });
         callback();
    };
}
const deleteblogpost = (dispatch) => {
    return async (id) => {
        await serverJson.delete(`/blogposts/${id}`)
        dispatch({ type: "deleteBlogPost", payload: id });

    };
}

const editblogpost = (dispatch) => {
    return async (id, title, content, callback) => {

        await serverJson.put(`/blogposts/${id}`,{title,content})
        dispatch({ type: "editBlogPost", payload: { id, title, content } });
        callback();

    };
}

export const { Context, Provider } = createDataContext(blogReducer, 
    { addblogpost, deleteblogpost ,editblogpost,getBlogPost}, []);