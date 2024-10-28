import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

export function InputButton({}) {
  const [tasks, setTasks] = useState<string[]>(['']);
  const [taskValue, setTaskValue] = useState<string>('');
  const placeholder = 'Adicione uma nova tarefa';

  const handleAddTask = () => {

    if(taskValue == ''){
      return Alert.alert("Adicione um Task", "Por favor adicione uma Task a lista");
    }

    setTasks(prevState => [...prevState, taskValue]);
    setTaskValue('');
    console.log('tasks', tasks);
  }

  return (
    <View style={styles.container}>
        <TextInput 
          placeholder={placeholder}
          placeholderTextColor="#808080"
          value={taskValue}
          onChangeText={setTaskValue}
          style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={handleAddTask} >
          <AntDesign name="pluscircleo" size={20} color="white" />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  input: {
    backgroundColor: '#262626',
    width: 271,
    height: 54,
    padding: 16,
    marginRight: 4,
    fontSize: 16,
    lineHeight: 140,
    color: '#F2F2F2',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
  },
});
