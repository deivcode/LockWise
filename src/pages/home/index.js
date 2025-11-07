import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
//------------------------------------------------------------
// Função para calcular a força da senha
//------------------------------------------------------------
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

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({ text: '', color: '' });

  const navigation = useNavigation();

  function generatePassword() {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setPasswordStrength(getPasswordStrength(password)); // Calculate strength
    navigation.navigate('SavePassword', { password: password });
  }

  return (
    //Tela da senha:
    <View style={styles.conteiner}>
      <View>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.texto}> {size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50, width: '100%' }}
          minimumValue={6}
          maximumValue={50}
          maximumTrackTintColor="#3A3D4D"
          minimumTrackTintColor="#B942FF"
          thumbTintColor="#B942FF"
          value={size}
          onValueChange={(value) => setSize(Math.round(value))}
          step={1}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.texto}>Gerar Senha</Text>
      </TouchableOpacity>

      <View style={styles.areaTexto}></View>
    </View>
  );
}
//------------------------------------------------------------
//Estilos do conteiner
//------------------------------------------------------------
const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#111827',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 60,
  },
  area: {
    marginBottom: 40,
    marginTop: 40,
    marginLeft: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1F2937',
  },
  areaTexto: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#B942FF', // Uma cor de exemplo
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
});