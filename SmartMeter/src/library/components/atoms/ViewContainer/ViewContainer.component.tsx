import React from 'react';
import { ColorValue, StyleProp, View, ViewStyle } from 'react-native';

//other deps
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

//styles
import styles from './ViewContainer.styles';

//types
type ViewContainerProps = {
	withoutStatusBar?: boolean;
	withoutBottomInset?: boolean;
	containerColor?: ColorValue;
	contentContainerColor?: ColorValue;
	style?: StyleProp<ViewStyle>
};

//helpers
import flattenStyle from 'library/helpers/flattenStyle.helper';

//constants
const baseEdges: Edge[] = [];

export const ViewContainer: React.FC<ViewContainerProps> = ({
	withoutStatusBar,
	withoutBottomInset,
	containerColor,
	contentContainerColor,
	style,
	children,
}) => {
	const _style = flattenStyle(style) as ViewStyle;

	const edges: Edge[] = [];
	if (!withoutStatusBar)
		edges.push('top');

	if (!withoutBottomInset)
		edges.push('bottom');

	const _containerColor = containerColor || styles.container.backgroundColor;
	const _contentContainerColor = contentContainerColor || _style?.backgroundColor || styles.innerContainer.backgroundColor;

	return (
		<SafeAreaView
			edges={[...baseEdges, ...edges]}
			style={[styles.container, {
				backgroundColor: _containerColor,
			}]}
		>
			<View style={[styles.innerContainer, style, {
				backgroundColor: _contentContainerColor,
			}]}
			>
				{children}
			</View>
		</SafeAreaView>
	);
};
