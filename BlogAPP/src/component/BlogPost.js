import React,{useState} from 'react'
import { Text, TextInput, StyleSheet, View, Button } from 'react-native'

const BlogPost = ({onSubmit,initialValues}) => {
    const [Title, SetTitle] = useState(initialValues.title)
  const [Content, SetContent] = useState(initialValues.content)
    return (
        <>
          <Text>Enter Title</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Add Blog Title"
            onChangeText={newText => SetTitle(newText)}
            defaultValue={Title}
          />
          <View style={styles.space}></View>
          <Text>Enter Content</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Add Content"
            onChangeText={newText => SetContent(newText)}
            defaultValue={Content}
          />
    
          <View style={styles.space}></View>
          <Button 
          title='Save Blog Post' style={styles.button} 
      onPress={()=>onSubmit(Title, Content)}
          />
        </>
      )
}

BlogPost.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
}

const styles = StyleSheet.create({
    textinput: {
      borderColor: "black",
      borderRadius: 10,
      borderWidth: 2,
      margin: 5
    },
    space: {
      height: 10,
      width: 20
    },
    button: {
    marginLeft:10,
    fontSize:18
  
    }
  });

export default BlogPost