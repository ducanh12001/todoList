import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Keyboard } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';

const Home = () => {
    const [newTask, setNewTask] = useState('');

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const tasks = useSelector(state => state.app.tasks);
    const sortTask = [...tasks];
    sortTask.sort((a, b) => new Date(b.time) - new Date(a.time));

    const doAddTask = () => {
        if (newTask.trimStart() === "") {
            alert("Enter task");
        }
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-zA-Z0-9]/;
        if (newTask && specialChars.test(newTask)) {
            dispatch({
                type: 'ADD',
                payload: {
                    id: nanoid(),
                    newTask: newTask,
                    time: new Date().toLocaleString()
                }
            })
        }
        setNewTask('');
        Keyboard.dismiss();
    }

    const doDeleteTask = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    const doClearAll = () => {
        dispatch({
            type: 'CLEAR',
        })
    }

    const doSignOut = () => {
        dispatch({
            type: 'LOGOUT',
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{user.username}</Text>
                <TouchableOpacity style={{}} onPress={doSignOut}>
                    <Ionicons name="log-out" size={33} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.headView}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter'
                    value={newTask}
                    onChangeText={text => setNewTask(text)}
                />
                <TouchableOpacity style={styles.icon} onPress={doAddTask}>
                    <Ionicons name="add" size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.bodyView}>
                <Text style={{ fontSize: 24, fontWeight:"bold" }}>Task</Text>
                <TouchableOpacity style={styles.clearBtn} onPress={doClearAll}>
                    <Text style={{ fontSize: 18, fontWeight:"bold" }}>Clear All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botView}>
                <FlatList
                    data={sortTask}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.taskView}>
                                <Text style={{ fontSize: 18 }}>{item.newTask.trimStart()}</Text>
                                <TouchableOpacity onPress={() => doDeleteTask(item.id)}>
                                    <Ionicons name="trash" size={24} />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#20b2de',
        alignItems: "center",
    },
    headView: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 20
    },
    input: {
        marginRight: 15,
        padding: 10,
        borderWidth: 1,
        fontSize: 16,
        flex: 8
    },
    icon: {
        backgroundColor: "#50baed",
        alignItems: "center",
        justifyContent: "center",
        flex: 2,
    },
    bodyView: {
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    taskView: {
        flexDirection: 'row',
        backgroundColor: '#79b8f7',
        padding: 15,
        justifyContent: "space-between",
        margin: 10,
        borderRadius: 10,
    },
    botView: {
        marginHorizontal: 10,
        flex: 1,
    },
    clearBtn: {
        backgroundColor: "#1aa7ea",
        height: 40,
        width: 90,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center'
    }
})

export default Home