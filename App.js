import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const Validacion = () => {
    if (!usuario || !contrasenia) {
      return alert('Llene los campos faltantes');
    } else {
      return alert('Has iniciado sesión');
    }
    
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagenLogo}
        source={require('./assets/espectro.png')}
      />
      <Text style={styles.titulo}>ToDoApp</Text>
      <Text style={styles.login}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Contraseña"
        value={contrasenia}
        onChangeText={setContrasenia}
      />

      <TouchableOpacity style={styles.boton} onPress={Validacion}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
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
