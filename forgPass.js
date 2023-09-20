import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');

  const Validacion = () => {
    if (!email) {
      return alert('Llene los campos faltantes');
    } else{
      return alert('Se ha enviado el correo de recuperacion');
    }
    
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagenLogo}
        source={require('./assets/espectro.png')}
      />
      <Text style={styles.titulo}>ToDoApp</Text>
      <Text style={styles.login}>Olvide mi Contraseña</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.boton} onPress={Validacion}>
        <Text style={styles.buttonText}>Enviar</Text>
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
    marginBottom: 10,
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
