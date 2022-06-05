import React, {useState, useEffect} from 'react'

export default (url) => {
const [data, setData] = useState([])
const [loading, setLoading] = useState(true)

const fetchData = async() => {
	const response = await fetch(url)
	const json = await response.json()
	setData(json)
	setLoading(false)
}

useEffect(() => {
	fetchData()
}, [data])

return {loading, data}
}