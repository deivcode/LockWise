import { useState, useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/useStorage';
import { PasswordItem } from './components/passwordItem';


export function Passwords() {
    const [listPasswords, setListPasswords] = useState([]);
    const [passwordToEdit, setPasswordToEdit] = useState(null);
    const focused = useIsFocused();
    const navigation = useNavigation();
    const { getPassWord, removePassword } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getPassWord('@pass');
            setListPasswords(passwords);
        }

        loadPasswords();
    }, [focused])

    async function handleRemove(item) {
        const passwords = await removePassword('@pass', item);
        setListPasswords(passwords);
    }

    function handleEditPassword(passwordData) {
        navigation.navigate('SavePassword', { password: passwordData.password, passwordName: passwordData.name, isEditing: true });
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#111827' }}>
            <View style={styles.header}>

                <Text style={styles.title}>Minhas Senhas</Text>


            </View>

            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14, }}
                    data={listPasswords}
                    keyExtractor={(item) => String(item.password)}
                    renderItem={({ item }) => (
                        <PasswordItem
                            data={item}
                            removePassword={() => handleRemove(item.password)}
                            onEdit={handleEditPassword}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#111827',
        padding: 14,
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    },
});