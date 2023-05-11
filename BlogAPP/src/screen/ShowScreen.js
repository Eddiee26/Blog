import React, { useContext } from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Context } from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ShowScreen = (props) => {
    const id= props.route?.params?.id;
    
    const {state}=useContext(Context);
    const BlogPost= state.find((blgpost)=> blgpost.id=== id)

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => props.navigation.navigate('edit',{id: props.route?.params?.id})}>
                  <Icon name="edit" size={20} />
                </TouchableOpacity>
              ),
        });
      }, [props.navigation]);
    
    return(
        <>
         <Text>{BlogPost.title}</Text>
        <Text>{BlogPost.content}</Text>
        </>
    )

    
}

export default ShowScreen