import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';


export default function Map(props) {
    const [marker, setMarker] = useState(null)

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarker(coords)
    }

  return (
   <>
    <MapView
    style={styles.map}
    region={props.location}
    mapType='satellite'
    onLongPress={showMarker}
    >
    {marker &&
    <Marker
    title='My Marker'
    coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
    />
    }
    </MapView>
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
