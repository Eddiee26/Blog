import React, { useContext, useEffect } from 'react'
import { Text, StyleSheet, FlatList, Button, View, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import Icon from 'react-native-vector-icons/FontAwesome5';
const Home = ({navigation}) => {
  const { state, deleteblogpost,getBlogPost } = useContext(Context)
  
  useEffect(() => {
    getBlogPost();
   const lsitener= navigation.addListener('focus',()=>{
      getBlogPost();
    })
  }, [])
  
  return (
    <>
      <FlatList data={state} keyExtractor={blg => blg.title}
        renderItem={({ item }) => {
          return(
          <TouchableOpacity onPress={()=> navigation.navigate('Show',{id:item.id})}>

            <View style={styles.row}>
            <Text>{item.title}</Text>
            <Text>{item.id}</Text>
            <TouchableOpacity onPress={()=> deleteblogpost(item.id)}>
              <Icon name="trash" size={20} color="#900" />
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
          ) ;
          
        }}>
      </FlatList>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'grey'
  }
});

export default Home