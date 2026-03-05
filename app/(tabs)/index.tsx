import { View,  StyleSheet } from 'react-native';

import Button from '../components/Button';
import ImageViewer from '../components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({ //이 작업 끝나기까지 딱ㄱㄷ
      mediaTypes: ['images'], //이미지만 선택 가능 
      allowsEditing: true, //자르기 기능
      quality:1, //	이미지 품질 설정.
    });

    if(!result.canceled){
      console.log(result);
    }else{
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    paddingTop: 50,
  },
});