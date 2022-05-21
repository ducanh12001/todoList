import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux'
import { addJob, deleteJob, clearAllJob } from '../store/jobSlice'

const Home = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const jobList = useSelector(state => state.jobs);

    const [jobText, setJobText] = useState('');

    const doAddJob = () => {
        if (jobText.trimStart() === "") {
            alert("Enter job");
            setJobText('');
        }
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-zA-Z0-9]/;
        if (jobText && specialChars.test(jobText)) {
            dispatch(addJob({jobText: jobText}));
        }
        setJobText('');
    }

    const doDeleteJob = (id) => {
        dispatch(deleteJob({id: id}));
    }

    const doClearAll = () => {
        dispatch(clearAllJob());
    }

    return (
        <View style={styles.container}>
            <View style={styles.headView}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter'
                    value={jobText}
                    onChangeText={text => setJobText(text)}
                />
                <TouchableOpacity style={styles.icon} onPress={() =>doAddJob()}>
                    <Ionicons name="add" size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.bodyView}>
                <Text style={{ fontSize: 24 }}>Task</Text>
                <FlatList
                    data={jobList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <>{item.newJob !== "" ?
                            <View style={styles.jobView}>
                                <Text style={{fontSize: 18}}>{item.newJob.trim()}</Text>
                                <TouchableOpacity onPress={() =>doDeleteJob(item.id)}>
                                    <Ionicons name="trash" size={24} />
                                </TouchableOpacity>
                            </View>
                            :
                            <View></View>
                            }
                            </>
                        )
                    }}
                />
            </View>
            <View style={styles.botView}>
                <TouchableOpacity style={styles.clearBtn} onPress={()=>doClearAll()}>
                    <Text style={{ fontSize: 16 }}>Clear All</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headView: {
        flexDirection: "row",
        margin: 10
    },
    input: {
        marginRight: 15,
        padding: 10,
        borderWidth: 1,
        fontSize: 16,
        flex: 8
    },
    icon: {
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        flex: 2,
    },
    bodyView: {
        margin: 10
    },
    jobView: {
        flexDirection: 'row', 
        backgroundColor:'#98c3e4', 
        padding: 15,
        justifyContent: "space-between",
        margin: 10,
        borderRadius: 10,
    },
    botView: {
        margin: 10
    },
    clearBtn: {
        backgroundColor: "gray",
        height: 40,
        width: 90,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center'
    }
})

export default Home