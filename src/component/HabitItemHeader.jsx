import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import StyleText from './StyleText'

const HabitItemHeader = ({name, description, times}) => {
return(
	<View style={styles.container}>
		<View style={{paddingLeft: 20, paddingRight: 15}}>
			<Image style={styles.image} />
		</View>
		<View style={{flex: 1 }}>
			<StyleText fontWeight='bold'>{name}</StyleText>
			<StyleText style={{paddingTop: 5 }} color='secondary'>Description: {description}</StyleText>
			<StyleText color='secondary'>Times per week: {times} </StyleText>
		</View>
	</View>
)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 15
	},
	image: {
		borderWidth: 0.5, 
		borderColor: 'black',
		height: 48,
		width: 48
	}
})

export default HabitItemHeader