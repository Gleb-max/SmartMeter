import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

//modules
import { DimensionsManager } from 'library/modules';

//components
import { SMIcons } from 'library/components/atoms';
import { TabBarItem } from './TabBarItem';

//animations
import Animated from 'react-native-reanimated';
import { useTabsAnimation } from 'library/animations';

//styles
import styles, {
	CURSOR_TAB_OFFSET,
	TAB_BAR_BORDER_RADIUS,
} from './TabBar.styles';

//types
import { TabData } from './TabBar.interface';

type TabBarProps = {
	tabsData: TabData[];
	currentIndex: number;
	style?: StyleProp<ViewStyle>;
};

export const TabBar: React.FC<TabBarProps> = ({
	tabsData,
	currentIndex,
	style,
}) => {
	//animations
	const screenWidth = DimensionsManager.getScreenWidth();
	const tabWidth = (screenWidth / tabsData.length) - 5;

	const tabsAnimation = useTabsAnimation(tabWidth, tabsData.length, CURSOR_TAB_OFFSET);

	//effects
	React.useEffect(() => {
		tabsAnimation.moveToIndex(currentIndex);
	}, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

	//renders
	const _renderTabBarItems = React.useCallback(() => {
		return tabsData.map((tab, index) => {
			const leftStyle: ViewStyle = { borderTopLeftRadius: TAB_BAR_BORDER_RADIUS };
			const rightStyle: ViewStyle = { borderTopRightRadius: TAB_BAR_BORDER_RADIUS };

			return (
				<TabBarItem
					{...tab}
					key={tab.iconName}
					style={[styles.tabBarItem,
						(index === 0) && leftStyle,
						(index === tabsData.length - 1) && rightStyle,
					]} />
			);
		});
	}, [tabsData]);

	return (
		<View style={[styles.container, style]}>
			{/* actual component size is smaller on borderRadius
			to allow content going under rounding (e.g. scrollview) */}
			<View style={styles.tabBarSpace} />

			<View style={styles.tabBar}>
				{_renderTabBarItems()}

				<Animated.View
					style={[
						styles.cursor, {
							width: tabWidth,
						},
						tabsAnimation.cursorStyle,
					]}
				>
					<View style={{ flex: 1 }}>
						<View style={styles.circle} />

						<SMIcons
							size={30}
							height={15}
							width={33}
							style={{ bottom: 5 }}
							color='#005670'
							name='ic_tabbar_cursor' />
					</View>
				</Animated.View>
			</View>
		</View>
	);
};
