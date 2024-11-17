import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, seteditIndex] = useState(-1);

  // functions
  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks]
        console.log('entered 1')
        updatedTasks[editIndex] = task;
        console.log('entered 2')
        setTasks(updatedTasks);
        console.log('entered 3')
        seteditIndex(-1);
        console.log('entered 4')
      } else {
        console.log('entered 5',task, tasks)
        setTasks([...tasks, task])
        console.log('entered 6')
      }
    }
  }

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    seteditIndex(index);
    setTask(taskToEdit);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>{item}</Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity
          onPress={()=>handleEditTask(index)}
        >
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>handleDeleteTask(index)}
        >
          <Text style={styles.deleteButton}>Del</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bear With Me!</Text>
      <Text style={styles.heading}>To do App</Text>
      <TextInput
        placeholder='Enter your task'
        style={styles.input}
        value={task}
        onChangeText={(text)=>setTask(text)}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddTask}
        >
        <Text style={styles.addButtonText}>{editIndex === -1?'Add Task':'Update Task'}</Text>
      </TouchableOpacity>
      <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index)=>index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:40,
    marginTop:40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: '7',
    color: 'green',
  },
  input: {
    borderColor:'#ccc',
    borderWidth: 5,
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'green',
    padding:10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    AlignItems: 'center',
    marginBottom: 15,
    fontSize: 15,
  },
  itemList: {
    fontSize: 19,
  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18
  },
  deleteButton: {
    color: 'red',
    fontwight: 'bold',
    fontSize: 18,
  },
});

export default App;