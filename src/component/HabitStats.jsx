import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import StyleText from './StyleText'

const HabitStats = ({priority, counter, streak}) => {
	let priorityText = 'Low'
	if(priority === 2) {
		priorityText = 'Medium'
	}else if(priorityText === 3){
		priorityText = 'High'
	}

	return(
		<View style={styles.container}>
			<View >
				<StyleText style={styles.button} align='center'  color='white' fontWeight='bold'>{priorityText}</StyleText>
				<StyleText align='center'  >Priority</StyleText>
			</View>
			<View>
				<StyleText align='center' fontWeight='bold'>{counter}</StyleText>
				<StyleText align='center' >Current Streak</StyleText>
			</View>
			<View>
				<StyleText align='center' fontWeight='bold'>{streak}</StyleText>
				<StyleText align='center' >Max streak</StyleText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	button: {
		backgroundColor: '#0366d6',
		padding: 3,
		borderRadius: 4,


	}	
})



export default HabitStats