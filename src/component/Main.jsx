import React from 'react'
import Constants from 'expo-constants'
import HabitsList from './HabitList'
import { Text, View , StyleSheet} from 'react-native'


const Main = () => {
	return(
		<View style={styles.container}>
			<HabitsList />
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		flexGrow: 1
	}
})

export default Main