import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPost from '../component/BlogPost';
const EditScreen = (props) => {
    const { state,editblogpost } = useContext(Context);

const id=props.route?.params?.id;
    const blogPost = state.find((blogpost) => blogpost.id === id);
    
    return <BlogPost 
    initialValues={{title:blogPost.title, content:blogPost.content}}
    onSubmit={(title, content)=>{
            editblogpost(id, title, content,()=>props.navigation.navigate("Home"))
    }}></BlogPost>
}
const styles = StyleSheet.create({
    textinput: {
        borderWidth: 2,
        borderColor: 'Black'
    }
});

export default EditScreen