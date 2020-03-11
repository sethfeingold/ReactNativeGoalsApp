import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        if (enteredGoal !== "") {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
        } else {
            Alert.alert('You must enter a goal for it to be added!  :)');
        }
    }

    return(
        <Modal style={styles.modal} visible={props.visible} animationType="slide">
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Type a goal!"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer} >
                    <View style={styles.button} >
                        <Button 
                            title="CANCEL"
                            color="red"
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button} >
                        <Button 
                            title="ADD"
                            onPress={addGoalHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 3,
        width: "70%",
        marginBottom: 20
    },
    buttonContainer: {
        width: '50%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;