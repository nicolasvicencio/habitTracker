import { View, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import React, {useState} from 'react'
import HabitCircle from './HabitCircle';

export default function HabitCircles(item) {


	const week = [
		{ name:'Mon'},
		{ name: 'Tus'},
		{ name:"Wes"},
		{ name:'Thr'},
		{ name: 'Fri'},
		{ name: 'Sat'}, 
		{ name:'Sun'}]
 
	return (
		<View>
			<FlatList 
			style={styles.container}
			data={week}
			renderItem={(day) => <HabitCircle key={day.name} day={day} id={item._id}/> }
			/>

			{/* {week.map(day => <HabitCircle key={day.name} day={day} id={item._id}/>)} */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: 20,
		paddingHorizontal: 5,
		borderBottomColor: '#ccc',
		borderBottomWidth: 0.5,
	}
})