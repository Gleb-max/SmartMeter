import React from 'react';
import { TextStyle } from 'react-native';

//other deps
import Svg, { Path, PathProps } from 'react-native-svg';

//constants
import { icons } from './SMIcons.constants';

//types
import { SMIconsProps } from './SMIcons.interface';

//helpers
import { flattenStyle } from 'library/helpers';

export const SMIcons: React.FC<SMIconsProps> = React.memo(({
	name,
	color,
	size,
	style,
}) => {
	const _style = flattenStyle(style) as TextStyle;

	const iconSize = (_style?.fontSize || size) as number;
	const iconColor = (_style?.color || color) as string;

	//renders
	const _renderPaths = () => {
		let iconName = name;

		if (!(iconName in icons))
			iconName = 'ic_wrong_icon';

		return icons[iconName].map((path) => {
			const evenOdd: PathProps = (path.evenOdd) ? {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
			} : {};

			return (
				<Path
					{...evenOdd}
					key={path.d}
					d={path.d} />
			);
		});
	};

	return (
		<Svg
			width={iconSize}
			height={iconSize}
			viewBox='0 0 26 27'
			fill={iconColor}
			style={_style}
		>
			{_renderPaths()}
		</Svg>
	);
});
