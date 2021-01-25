import React from 'react';

//navigation
import {
	createBottomTabNavigator,

	BottomTabBarOptions,
	BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

//tab screens
import { MainNavigation } from 'screens/MainScreen';
import { NewsNavigation } from 'screens/NewsScreen';
import { AnalyticsScreen } from 'screens/AnalyticsScreen/Analytics.screen';
import { AdvicesNavigation } from 'screens/AdvicesScreen';
import { ProfileNavigation } from 'screens/ProfileScreen';

//features navigators
import { NotificationsNavigation } from 'screens/NotificationsScreen';
import { AnalyticsNavigation } from 'screens/AnalyticsScreen';

//components
import { TabBarContainer } from 'library/components/molecules';

//types
import { Navigation as NavigationTypes } from 'library/types';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

type HomeNavigationProps = {
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
	},
};

const routes: NavigationTypes.TabBarRouteConfig[] = [
	{
		...mapRouteNameToData['main/home'],
		screen: MainNavigation,
	},
	{
		...mapRouteNameToData['main/uk'],
		screen: NewsNavigation,
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
		screen: ProfileNavigation,
	},
];

const HomeNativeStack = createNativeStackNavigator();
const HomeTabs = createBottomTabNavigator();

export const HomeNavigation: React.FC<HomeNavigationProps> = ({
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
			<HomeTabs.Screen
				name={route}
				component={screen}
				key={route} />
		));
	}, []);

	const _renderBottomTabBar = React.useCallback(() => {
		return (
			<HomeTabs.Navigator
				tabBar={_renderTabBar}
			>
				{_renderPages()}
			</HomeTabs.Navigator>
		);
	}, [_renderPages, _renderTabBar]);

	return (
		<HomeNativeStack.Navigator
			screenOptions={{ headerShown: false, stackAnimation: 'default' }}
		>
			<HomeNativeStack.Screen
				name='main'
				component={_renderBottomTabBar} />

			<HomeNativeStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<HomeNativeStack.Screen
				name='analytics'
				component={AnalyticsNavigation} />
		</HomeNativeStack.Navigator>
	);
};
