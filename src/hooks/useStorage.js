import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    //buscar as senhas salvas
    const getPassWord = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];


        } catch (error) {
            console.log("Erro ao buscar ", error);
            return [];
        }
    }

    //Salvar a senha
    const savePassword = async (key, value) => {
        try {

            let passwords = await getPassWord(key);

            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));

        } catch (error) {
            console.log("Erro ao salvar ", error);
        }

    }

    //remover senha salva

    const removePassword = async (key, item) => {
        try {
            let passwords = await getPassWord(key);

            let myPasswords = passwords.filter((password) => {
                return (password.password !== item);
            })



            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords

        } catch (error) {
            console.log("Erro ao remover ", error);
        }

    }

    // Atualizar senha salva
    const updatePassword = async (key, oldPasswordValue, newValue) => {
        try {
            let passwords = await getPassWord(key);
            const index = passwords.findIndex(p => p.password === oldPasswordValue);

            if (index !== -1) {
                passwords[index] = newValue;
                await AsyncStorage.setItem(key, JSON.stringify(passwords));
            }
            return passwords;
        } catch (error) {
            console.log("Erro ao atualizar ", error);
            return [];
        }
    };

    return {
        getPassWord,
        savePassword,
        removePassword,
        updatePassword,
    }

}

export default useStorage;