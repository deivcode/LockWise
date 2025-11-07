import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';

//------------------------------------------------------------
//
//------------------------------------------------------------

export function PasswordItem({ data, removePassword, onEdit }) {
    async function handleCopyPassword() {
        await Clipboard.setString(data.password);
        alert('Senha copiada para a área de transferência!');
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftActions}>
                <TouchableOpacity onPress={handleCopyPassword} style={styles.actionButton}>
                    <Ionicons name="copy" size={20} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onEdit(data)} style={styles.actionButton}>
                    <Ionicons name="create" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={styles.passwordInfo}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.password}>{data.password}</Text>
            </View>
            <TouchableOpacity onPress={() => removePassword(data.password)} style={styles.actionButton}>
                <Ionicons name="trash" size={20} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
}

//------------------------------------------------------------
//Style
//------------------------------------------------------------
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F2937',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftActions: {
        flexDirection: 'row',
    },
    passwordInfo: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    name: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    password: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    actionButton: {
        padding: 8,
    },
});