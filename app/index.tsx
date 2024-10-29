import { NoTasksAvailable } from "@/components/NoTasksAvailable";
import { Task } from "@/components/Task";
import { TaskProps } from "@/Types/Task";
import { useEffect, useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Text, Image, View,  StyleSheet, FlatList, TextInput, TouchableOpacity, Alert } from "react-native";


export default function Index() {
  const [tasksList, setTasksList] = useState<TaskProps[]>([]);
  const [tasksDoneNumber, setTasksDoneNumber] = useState(0);
  const [taskTitleValue, setTaskTitleValue] = useState<string>('');
  const placeholder = 'Adicione uma nova tarefa';
  
  useEffect(() => {
  }, [tasksList]);

  const handleRemoveTask = (id: string) => {
    const filteredTasks = tasksList!.filter((task) => task.id !== id)
    setTasksList(filteredTasks);
    if(tasksDoneNumber != 0) setTasksDoneNumber(tasksDoneNumber -1);
  }

  const handleDoneTask = (id: string) => {
    console.log('id', id);
    const filteredItems = tasksList!.map((item) => { 
      if(item.id === id) {
        item.statusDone = true;
      }
      if(item.statusDone) {
        setTasksDoneNumber(tasksDoneNumber + 1);
      }
      return item;
    })
    filteredItems.sort((b, a) =>  Number(b.statusDone) - Number(a.statusDone));
    setTasksList(filteredItems);
  }

  const handleAddTask = () => {
    
    if(taskTitleValue == ''){
      return Alert.alert("Adicione um Task", "Por favor adicione uma Task a lista");
    }

    setTasksList(taskList => [
      ...taskList,
      {
        id: String(new Date().getTime()),
        title: taskTitleValue,
        statusDone: false,
      }
    ]);
    setTaskTitleValue('');
  }

  return ( 
    <View style={styles.container}>
      <Image accessible={false} source={{uri: '../assets/Logo.png'}} style={styles.logo} />
      <View style={styles.containerInput}>
        <TextInput 
          placeholder={placeholder}
          placeholderTextColor="#808080"
          value={taskTitleValue}
          onChangeText={setTaskTitleValue}
          style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={handleAddTask} >
          <AntDesign name="pluscircleo" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={tasksList}
          renderItem={(task) => 
          <Task 
            id={task.item.id}
            title={task.item.title} 
            removeTask={() => handleRemoveTask(task.item.id)} 
            doneTask={() => handleDoneTask(task.item.id)} 
            statusDone={task.item.statusDone}/>}
        keyExtractor={item => item.id}
      />
      </View>
      <View style={styles.tasksDiv}>
        <Text style={styles.task}>Criadas <Text style={styles.textNumber}>{tasksList!.length}</Text></Text> 
        <Text style={styles.tasksDone}>Concluídas <Text style={styles.textNumber}>{tasksDoneNumber}</Text></Text>
      </View>
      { tasksList.length == 0 && (<NoTasksAvailable />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },
  task: {
    color: '#4EA8DE',
    fontSize: 14,
  },
  tasksDone: {
    color: '#8284FA',
    fontSize: 14,
  },
  textNumber: {
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 2,
    paddingTop: 2,
    color: '#fff',
  },
  tasksDiv: {
    width: 327,
    marginTop: 32,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 111,
    height: 32,
    marginTop: 40,
    marginBottom: 40
  },
  containerInput: {
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


