import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
    //PropsWithChildren은 children 타입을 자동으로 추가해주는 유틸 타입
}>;

export default function EmojiPicker({isVisible, children, onClose}:Props){
    return(
        <View>     //slide, fade, none   //true-배경이 반투명, false-배경없이 꽉채움
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Choose a sticker</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name='close' color="#fff" size={22} />
                        </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: '100%',
        backgroundColor:'#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer:{
        height:'16%',
        backgroundColor: '#464C55',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize:16,
    }
});