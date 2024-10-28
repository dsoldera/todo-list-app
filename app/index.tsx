import { InputButton } from "@/components/InputButton";
import { ListTasks } from "@/components/ListTasks";
import { NoTasksAvailable } from "@/components/NoTasksAvailable";
import { useState } from "react";
import { Text, Image, View,  StyleSheet, Button } from "react-native";

export default function Index() {
  const [tasks, setTasks] = useState(0);
  const [tasksDone, setTasksDone] = useState(0);
  return ( 
    <View style={styles.container}>
      <Image accessible={false} source={{uri: '../assets/Logo.png'}} style={styles.logo} />
      <InputButton />
      <ListTasks />
      <View style={styles.tasksDiv}>
        <Text style={styles.task}>Criadas <Text style={styles.textNumber}>{tasks}</Text></Text> 
        <Text style={styles.tasksDone}>Concluídas <Text style={styles.textNumber}>{tasksDone}</Text></Text>
      </View>
      <NoTasksAvailable />
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
  }
});
