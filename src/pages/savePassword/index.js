import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import useStorage from '../../hooks/useStorage';

// Função para calcular a força da senha
function getPasswordStrength(password) {
    let strength = 0;
    const length = password.length;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (length >= 6) strength++;
    if (length >= 10) strength++;
    if (hasLowercase) strength++;
    if (hasUppercase) strength++;
    if (hasNumbers) strength++;
    if (hasSymbols) strength++;

    if (strength <= 2) return { text: 'Fraca', color: '#EF4444' }; // Red
    if (strength <= 4) return { text: 'Média', color: '#F59E0B' }; // Orange
    return { text: 'Forte', color: '#10B981' }; // Green
}

export function SavePasswordScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { password: initialPassword, passwordName: initialPasswordName, isEditing } = route.params || {};

    const [passwordName, setPasswordName] = useState(initialPasswordName || '');
    const [editablePasswordValue, setEditablePasswordValue] = useState(initialPassword || '');
    const [isNameEditable, setIsNameEditable] = useState(false);
    const [isPasswordEditable, setIsPasswordEditable] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({ text: '', color: '' });

    const nameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const { savePassword, updatePassword } = useStorage();

    useEffect(() => {
        setPasswordStrength(getPasswordStrength(editablePasswordValue));
    }, [editablePasswordValue]);

    async function handleSavePassword() {
        const finalPasswordName = passwordName.trim() === '' ? 'senha' : passwordName;

        if (isEditing) {
            // Assuming initialPassword is the unique identifier for the old password
            await updatePassword("@pass", initialPassword, { name: finalPasswordName, password: editablePasswordValue });
        } else {
            await savePassword("@pass", { name: finalPasswordName, password: editablePasswordValue });
        }
        navigation.goBack();
    }

    const toggleNameEdit = () => {
        const newValue = !isNameEditable;
        setIsNameEditable(newValue);
        if (newValue) {
            setTimeout(() => {
                nameInputRef.current?.focus();
            }, 100);
        }
    };

    const togglePasswordEdit = () => {
        const newValue = !isPasswordEditable;
        setIsPasswordEditable(newValue);
        if (newValue) {
            setTimeout(() => {
                passwordInputRef.current?.focus();
            }, 100);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{isEditing ? "Editar Senha" : "Salvar Senha"}</Text>
            </View>

            <View style={styles.wrapper}>
                <View style={styles.cardContent} pointerEvents="auto">
                    <Text style={styles.title}>Detalhes da Senha</Text>

                    <View style={styles.inputContainer}>
                        <TouchableOpacity onPress={toggleNameEdit} style={styles.inputTouchable}>
                            <TextInput
                                style={[styles.input, !isNameEditable && styles.readOnlyInput]}
                                placeholder="Nome da Senha"
                                value={passwordName}
                                onChangeText={setPasswordName}
                                ref={nameInputRef}
                                editable={isNameEditable}
                                pointerEvents="auto"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleNameEdit} style={styles.editIcon}>
                            <Ionicons name={isNameEditable ? "checkmark-circle" : "pencil"} size={24} color="#B942FF" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <TouchableOpacity onPress={togglePasswordEdit} style={styles.inputTouchable}>
                            <TextInput
                                style={[styles.input, !isPasswordEditable && styles.readOnlyInput]}
                                placeholder="Senha"
                                value={editablePasswordValue}
                                onChangeText={setEditablePasswordValue}
                                ref={passwordInputRef}
                                editable={isPasswordEditable}
                                pointerEvents="auto"
                                secureTextEntry={!isPasswordEditable}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={togglePasswordEdit} style={styles.editIcon}>
                            <Ionicons name={isPasswordEditable ? "checkmark-circle" : "pencil"} size={24} color="#B942FF" />
                        </TouchableOpacity>
                    </View>

                    {editablePasswordValue !== '' && (
                        <Text style={[styles.strengthText, { color: passwordStrength.color }]}>
                            Força: {passwordStrength.text}
                        </Text>
                    )}

                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleSavePassword}>
                            <Text style={styles.buttonSaveText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111827',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: '#111827',
    },
    backButton: {
        marginRight: 15,
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    title: {
        color: '#333333',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        color: '#333333',
    },
    inputTouchable: {
        flex: 1,
    },
    readOnlyInput: {
        backgroundColor: '#f0f0f0',
        color: '#333333',
    },
    editIcon: {
        padding: 5,
    },
    buttonArea: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        margin: 5,
        backgroundColor: '#B942FF',
    },
    buttonSave: {
        backgroundColor: '#3a3d4d',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonSaveText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    strengthText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10,
        color: "#333333",
    },
});