import MapView from 'react-native-maps'
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';


export default function Map(props) {

  return (
   <>
    <MapView
    style={styles.map}
    region={props.location}
    mapType='satellite'
    />
   </>
  );
}

const styles = StyleSheet.create({
  map:
  {
    height:'100%',
    width:'100%',
  },
});
