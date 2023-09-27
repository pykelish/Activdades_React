import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Dimensions, FlatList } from 'react-native';

const pantallaAltura = Dimensions.get("screen").height;

export default function App() {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const addTarea = () => {
    setTareas(tareaActual => [...tareaActual, tarea])
    setTarea('')

  }

  const eliminarTarea = (index) =>{
    let temp = [...tareas]
    temp.splice(index, 1)
    setTareas(temp)
  }

  

  const TaskItem = ({ onPress, tarea }) => {
    let [isChecked, setisChecked] = useState(false)
    return (

      <View style={styles.contenedorTareas}>
        <TouchableOpacity style={styles.botonTarea} onPress={ ()=> setisChecked(!isChecked)}>
          <Text style={[styles.textoBoton, {textAlign:'center', lineHeight:40, fontSize:30}]}>{isChecked? "*" : ""}</Text> 
        </TouchableOpacity>

        <Text style={styles.textoTareas}>{tarea}</Text>

        <TouchableOpacity style={styles.botonEliminar}>
          <Text style={styles.textoBoton} onPress={onPress}> X </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagenLogo}
        source={require('./assets/espectro.png')}
      />
      <Text style={styles.titulo}>ToDoApp</Text>
      <Text style={styles.login}>Lista de tareas</Text>

      <View style={{display:'flex',flexDirection:'row', justifyContent: 'space-between', alignItems:'center', width:'100%'}}>
        <TextInput
          placeholder='Agregar nueva tarea'
          style={styles.textoInput}
          value={tarea}
          onChangeText={setTarea}>
        </TextInput>
        <View style={styles.localizacionBoton}>
          <TouchableOpacity style={styles.boton}>
            <Text
              onPress={addTarea}
              style={styles.botonTexto}>+</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ width: '100%' }}>
        <FlatList
          data={tareas}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => <TaskItem tarea={item} onPress={()=> eliminarTarea(index)} />}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    padding: 50,
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

  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19FDE8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    width: 50,
    height: 50,
  },

  botonTexto: {
    color: 'white',
    fontSize: 25,
  },

  localizacionBoton: {

  },

  textoInput: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 8,
    marginVertical: 8,
    width: 250,
  },

  botonTarea: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: 'black',
  },

  textoTareas: {
    color: 'black',
    marginLeft: 5,
    flex: 1,
  },

  textoBoton: {
    color: 'black',
    fontSize: 20,
  },

  contenedorTareas: {
    backgroundColor: '#01B3A3',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    opacity: .9,
    marginBottom: 5,
  },

  botonEliminar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: 'black',
  }
});
