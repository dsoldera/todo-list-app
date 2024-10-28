import { Text, FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from "react";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    statusDone: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    statusDone: true,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    statusDone: false,
  },
];

interface TaskProps {
  id: string,
  title: string,
  statusDone: boolean,
  removeTask?: () => void,
  doneTask?: () => void,
}

const Task = ({title, removeTask, doneTask, statusDone}: TaskProps) => (
  <View style={styles.task}>
    <TouchableOpacity style={styles.doneTask} onPress={doneTask} >
      {statusDone ? (
        <AntDesign name="checkcircle" size={20} style={styles.checkedRadio} />
      ) : (
        <Ionicons name="radio-button-off" size={24} style={styles.unchecked} />
      )}
    </TouchableOpacity>
    <Text style={styles.taskText}>{title}</Text>
    <TouchableOpacity style={styles.removeTask} onPress={removeTask} >
      <AntDesign name="delete" size={20} color="white" />
    </TouchableOpacity>
  </View>
);

export const ListTasks = () => {
  const [data, setData] = useState<TaskProps[]>(DATA);
  const [task, setTask] = useState<TaskProps>();

  useEffect(() => {
    console.log('data', data);
  }, [data])

  const handleRemoveTask = (id: string) => {
    setData(data.filter(item =>  item.id !== id));
  }

  const handleDoneTask = (id: string) => {
    console.log('id', id);
    console.log('handleDoneTask', data);
    const dani = data.filter((item) => item.id === id);
  }

  return (
    <View>
       <FlatList
        data={data}
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
  )
}

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    width: 327,
    marginBottom: 10,
    borderRadius: 8,
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    paddingRight: 8,
    backgroundColor: '#262626',
  },
  taskText: {
    color: '#fff',
  },
  doneTask: {
    width: 24,
    height: 24,
  },
  removeTask: {

  },
  checkedRadio: {
    width: 24,
    height: 24,
    color: '#5E60CE',
  },
  unchecked: {
    width: 24,
    height: 24,
    color: '#4EA8DE',
  }
})