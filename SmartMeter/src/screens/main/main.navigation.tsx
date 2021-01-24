import React from 'react';

//navigation
import {
	createBottomTabNavigator,
	BottomTabBarOptions,
	BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

//tab screens
import { MainScreen } from 'screens/MainScreen/Main.screen';
import { InformationScreen } from 'screens/InformationScreen/Information.screen';
import { AnalyticsScreen } from 'screens/AnalyticsScreen/Analytics.screen';
import { AdvicesNavigation } from 'screens/AdvicesScreen';

//features navigators

//components
import { TabBarContainer } from 'library/components/molecules';

//types
import { Navigation as NavigationTypes } from 'library/types';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

type MainNavigationProps = {
	notifications?: Record<string, number>;
}

//routes
const mapRouteNameToData: NavigationTypes.TabBarRouteMap = {
	'main/home': {
		route: 'main/home',
		label: 'Home',
		iconName: 'ic_tabbar_home',
	},
	'main/uk': {
		route: 'main/uk',
		label: 'UK',
		iconName: 'ic_tabbar_uk',
	},
	'main/graphics': {
		route: 'main/graphics',
		label: 'Graphics',
		iconName: 'ic_tabbar_graphics',
	},
	'main/drop': {
		route: 'main/drop',
		label: 'Drop',
		iconName: 'ic_tabbar_drop',
	},
	'main/account': {
		route: 'main/account',
		label: 'Account',
		iconName: 'ic_tabbar_account',
		disabled: true,
	},
};

const routes: NavigationTypes.TabBarRouteConfig[] = [
	{
		...mapRouteNameToData['main/home'],
		screen: MainScreen,
	},
	{
		...mapRouteNameToData['main/uk'],
		screen: InformationScreen,
	},
	{
		...mapRouteNameToData['main/graphics'],
		screen: AnalyticsScreen,
	},
	{
		...mapRouteNameToData['main/drop'],
		screen: AdvicesNavigation,
	},
	{
		...mapRouteNameToData['main/account'],
		screen: AdvicesNavigation,
	},
];

const MainNativeStack = createNativeStackNavigator();
const MainTabs = createBottomTabNavigator();

export const MainNavigation: React.FC<MainNavigationProps> = ({
	notifications = {
		'main/home': 0,
		'main/uk': 0,
		'main/graphics': 0,
		'main/drop': 0,
		'main/account': 0,
	},
}) => {
	//data
	const routeData = React.useMemo(() => {
		return routes.reduce((acc, tab) => ({
			...acc,
			[tab.route]: {
				...mapRouteNameToData[tab.route],
				notificationsCount: notifications[tab.route],
			},
		}), {});
	}, [notifications]);

	//renders
	const _renderTabBar = React.useCallback((props: BottomTabBarProps<BottomTabBarOptions>) => (
		<TabBarContainer
			mapRouteNameToData={routeData}
			{...props} />
	), [routeData]);

	const _renderPages = React.useCallback(() => {
		return routes.map(({ route, screen }) => (
			<MainTabs.Screen
				name={route}
				component={screen}
				key={route} />
		));
	}, []);

	const _renderBottomTabBar = React.useCallback(() => {
		return (
			<MainTabs.Navigator
				tabBar={_renderTabBar}
			>
				{_renderPages()}
			</MainTabs.Navigator>
		);
	}, [_renderPages, _renderTabBar]);

	return (
		<MainNativeStack.Navigator
			screenOptions={{ headerShown: false, stackAnimation: 'default' }}
		>
			<MainNativeStack.Screen
				name='main'
				component={_renderBottomTabBar} />
		</MainNativeStack.Navigator>
	);
};
