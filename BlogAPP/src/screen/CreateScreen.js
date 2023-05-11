import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPost from '../component/BlogPost';
const CreateScreen = ({navigation}) => {
  const { addblogpost } = useContext(Context);
  
return <BlogPost onSubmit={(title, content)=>{
  addblogpost(title, content,()=> navigation.navigate('Home'))
}}></BlogPost>
 
}


export default CreateScreen