import { View, Text, StyleSheet, Image } from "react-native"

export const NoTasksAvailable = () => {
  return (
    <View style={styles.container}>
      <Image accessible={false} source={{uri: '../assets/Clipboard.png'}}  style={styles.clipboard} />
      <Text style={[styles.text, styles.bolder]}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#333333',
  },
  text: {
    fontSize: 14,
    color: '#808080',
    textAlign: 'center',
    lineHeight: 24,
  },
  bolder: {
    fontWeight: 'bold',
  },
  clipboard: {
    width: 57,
    height: 56,
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 40,
  }
});