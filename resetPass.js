import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [password, setpassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [ConfNewPassword, setConfNewPassword] = useState('');

  const Validacion = () => {
    if (!password || !newPassword || !ConfNewPassword) {
      return alert('Llene los campos faltantes');
    }

    if(newPassword === ConfNewPassword){
      return alert('La contraseña se ha cambiado correctamente');
    } else{
      return alert('Las contraseñas no coinciden');
    }
    
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagenLogo}
        source={require('./assets/espectro.png')}
      />
      <Text style={styles.titulo}>ToDoApp</Text>
      <Text style={styles.login}>Reseestablecer Contraseña</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Contraseña"
        value={password}
        onChangeText={setpassword}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Nueva Contraseña"
        value={newPassword}
        onChangeText={setnewPassword}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Confirmar Contraseña"
        value={ConfNewPassword}
        onChangeText={setConfNewPassword}
      />

      <TouchableOpacity style={styles.boton} onPress={Validacion}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagenLogo: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  login: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  input: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 8,
    marginVertical: 8,
    width: '80%',

  },
  boton: {
    backgroundColor: '#00ffff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 24,
  },

});
