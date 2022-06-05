import { View, Text, TouchableOpacity , StyleSheet } from 'react-native'
import StyleText from './StyleText'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import useFetch from '../hooks/useFetch';

export default function HabitCircle({day, id}) {
	const [check, setCheck] = useState(false)
	const uncheckIcon = <Text style={styles.circle}></Text>
	const checkIcon = <AntDesign name="checkcircleo" size={24} color="green" />
	
	const {loading, data} = useFetch(`http://192.168.100.137:5000/habits/${id}`)
	
	const handlePress = async() => {
		const newData = {
			counter: data.counter + 1,
			streak: data.streak + 1
		}
		const putData = await fetch(`http://192.168.100.137:5000/habits/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(newData)
		})
		setCheck(!check)
		
	}

	return (
		<View>
			<View>
				<TouchableOpacity
					onPress={handlePress}
					>
					{check ? checkIcon : uncheckIcon}
				</TouchableOpacity>
			</View>
			<View>
				<StyleText fontSize='subheading' color='secondary' >{day.name}</StyleText>
			</View>
		</View>	
	)
}

const styles = StyleSheet.create({
	circle: {
		borderRadius: 200,
		borderColor: 'gray',
		borderWidth: 1,
		height: 25,
		width: 25
	}
})

