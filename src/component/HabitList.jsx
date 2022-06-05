
import React, {useEffect} from 'react'
import { View, Text, FlatList} from 'react-native'
import HabitItem from './HabitItem'
import useFetch from '../hooks/useFetch'

const HabitList = () => {
	const {loading, data: habits} = useFetch('http://192.168.100.137:5000/habits')



	return(
		<>
		{loading 
			? <Text> Loading...</Text> 
			: <FlatList 
				data={habits}
				ItemSeparatorComponent={() => <Text> </Text>}
				renderItem={({item}) => <HabitItem item={item}  />}
				/>
		}
	</>
	)
}

export default HabitList