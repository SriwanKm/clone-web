import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#dff8fd', '#94c2cc']} style={{flex: 1}}>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{flex: 1}}
            data={[
              {key: 'Home'},
              {key: 'About'},
              {key: 'Portfolio'},
              {key: 'Services'},
              {key: 'Contact'},
            ]}
            renderItem={({item}) => (
                <View style={styles.navItem}>
                  <TouchableHighlight underlayColor="#94c2cc" onPress={pressed}>
                    <Text style={styles.navText}>{item.key}</Text>
                  </TouchableHighlight>
                </View>
            )}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
