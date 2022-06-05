import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import HabitStats from './HabitStats'
import HabitItemHeader from './HabitItemHeader'
import HabitCircles from './HabitCircles'

import StyleText from './StyleText'


const HabitItem = ({item}) => {
	
	return(
		<View style={styles.container}>
			<HabitItemHeader {...item} />
			<HabitStats {...item} />
			<HabitCircles {...item}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingVertical: 5
	},
	strong: {
		color: '#09f',
		fontWeight: 'bold',
		marginBottom: 5
	},
})

export default HabitItem