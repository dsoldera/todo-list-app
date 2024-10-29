import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TaskProps } from "@/Types/Task";

export const Task = ({title, removeTask, doneTask, statusDone}: TaskProps) => (
  <View style={styles.task}>
    <TouchableOpacity onPress={doneTask} >
      {statusDone ? (
        <View style={styles.taskLine}>
          <View style={styles.doneTask}>
            <AntDesign name="checkcircle" size={20} style={styles.checkedRadio} />
          </View>
          <Text lineBreakMode='middle' textBreakStrategy='simple' style={styles.taskTextChecked}>{title}</Text>
        </View>
      ) : (
        <View style={styles.taskLine}>
          <View style={styles.doneTask}>
            <Ionicons name="radio-button-off" size={24} style={styles.unchecked} />
          </View>
          <Text lineBreakMode='middle' textBreakStrategy='simple' style={styles.taskText}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
    <TouchableOpacity style={styles.removeTask} onPress={removeTask} >
      <AntDesign name="delete" size={20} color="white" />
    </TouchableOpacity>
  </View>
);

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
  taskLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    color: '#fff',
    marginLeft: 10,
    
  },
  taskTextChecked: {
    color: '#808080',
    marginLeft: 10,
    textDecorationLine: 'line-through',
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