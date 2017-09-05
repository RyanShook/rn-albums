import React from 'react';
import { View, Text } from 'react-native';

//functional component, not class based
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
