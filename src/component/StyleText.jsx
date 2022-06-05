import React from 'react'
import {Text, StyleSheet} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.normal
	},
	colorPrimary: {
		color: theme.colors.primary
	},
	colorSecondary: {
		color: theme.colors.textSecondary
	},
	colorLow: {
		color: theme.colors.low
	},
	colorMedium: {
		color: theme.colors.medium
	},
	colorHigh: {
		color: theme.colors.high
	},
	colorWhite: {
		color: theme.colors.white
	},
	bold: {
		fontWeight: theme.fontWeights.bold
	},
	blue: {
		color: theme.colors.textSecondary
	},
	subHeading: {
		fontSize: theme.fontSizes.subHeading
	},
	textAlignCenter: {
		textAlign: theme.aligns.center
	},


})

export default function StyleText ({children, align, background ,color, fontSize, fontWeight, style, ...restOfProps}){
	const textStyles = [
		styles.text,
		align === 'center' && styles.textAlignCenter,
		color === 'primary' && styles.colorPrimary,
		color === 'secondary' && styles.colorSecondary,
		color === 'low' && styles.colorLow,
		color === 'white' && styles.colorWhite,
		color === 'medium' && styles.colorMedium,
		color === 'high' && styles.colorHigh,
		fontSize === 'subheading' && styles.subHeading,
		fontWeight === 'bold' && styles.bold,
		style,
	]
	return(
		<Text style={textStyles} {...restOfProps}>
			{children}
		</Text>
	)
}