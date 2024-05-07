import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import styles from './style';
import {HomeScreenProps} from '../../utils/types';
import {useGetQuery} from '../../services/api';

export default function Home({}: HomeScreenProps) {
  const [posts, setPosts] = useState([]);

  const {data, error, isLoading} = useGetQuery('/posts');
  useEffect(() => {
    setPosts(data);
  }, [data]);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error fetching data!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{paddingHorizontal: 20}}>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <View
            style={{
              borderRadius: 8,
              borderWidth: 2,
              flexDirection: 'row',
            }}>
            <Text>{item.userId}</Text>
            <Text>{item.body}</Text>
            <Text>{item.id}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}
