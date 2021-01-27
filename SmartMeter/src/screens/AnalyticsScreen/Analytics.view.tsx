import React, { Dispatch, SetStateAction } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, processColor, ListRenderItemInfo, Modal, TouchableWithoutFeedback } from 'react-native';

//components
import { ProfileHead } from 'library/components';

//other deps
import moment from 'moment';
import { Modalize } from 'react-native-modalize';
import { Host, Portal } from 'react-native-portalize';
import { BarChart, BarData, ChartLegend } from 'react-native-charts-wrapper';
import { Calendar, CalendarTheme, DateCallbackHandler, DateObject, LocaleConfig } from 'react-native-calendars';

//types
type AnalyticsViewProps = {
  userData: {
    name: string;
    surname: string;
    photo: string;
    address: string;
  };
  onNotifications: () => void;
  onProfile: () => void;
};

type OptionsItem = {
  title: string;
  values: string[];
  activeItemIndex?: number | undefined;
  setActiveItemIndex?: Dispatch<SetStateAction<number>> | undefined;
}

//components
import { SMIcons, Button } from 'library/components/atoms';

//components
import { CustomDropDown, PressableIcon } from 'library/components';

//styles
import styles from './Analytics.styles';

//consts
const calendarTheme: CalendarTheme = {
	arrowColor: '#005670',
	selectedDayTextColor: '#005670',
	todayTextColor: '#FF5B5B',
};

const calendarLocale = {
	monthNames: [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	],
	monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
	dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	dayNamesShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
};

const optionsData: OptionsItem[] = [
	{
		title: 'Тариф',
		values: ['Дневной', 'Ночной', 'Общий'],
	},
	{
		title: 'Единица измерения',
		values: ['m³', 'Рубли'],
	},
	{
		title: 'График',
		values: ['Столбчатый', 'Круговой'],
	},
	{
		title: 'Период',
		values: ['Неделя', 'Месяц', 'Год', 'Произвольный'],
	},
];

const xAxis = {
	valueFormatter: ['1', '2', '3', '4'],
	granularityEnabled: true,
	granularity: 1,
	axisMaximum: 4,
	axisMinimum: 0,
	centerAxisLabels: true,
};

const legend: ChartLegend = {
	enabled: true,
	textSize: 14,
	form: 'SQUARE',
	formSize: 14,
	xEntrySpace: 10,
	yEntrySpace: 5,
	wordWrapEnabled: true,
};

const data: BarData = {
	dataSets: [{
		values: [5, 40, 77, 81, 43],
		label: 'Холодная',
		config: {
			drawValues: false,
			colors: [processColor('#005670')],
		},
	},
	{
		values: [40, 5, 50, 23, 79],
		label: 'Горячая',
		config: {
			drawValues: false,
			colors: [processColor('#FF5B5B')],
		},
	}],
	config: {
		barWidth: 0.2,
		group: {
			fromX: 0,
			groupSpace: 0.1,
			barSpace: 0.1,
		},
	},
};

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
	userData,
	onNotifications,
	onProfile,
}) => {
	// set Russian in calendar
	LocaleConfig.locales.ru = calendarLocale;
	LocaleConfig.defaultLocale = 'ru';

	const optionsModalizeRef = React.useRef<Modalize>(null);

	const onOptionsOpen = () => {
    optionsModalizeRef.current?.open();
	};

	const changeCustomPeriodText = (text: string) => {
		optionsData[optionsData.length - 1].values[optionsData[optionsData.length - 1].values.length - 1] = text;
	};

	const applyCustomPeriod = () => {
		const prettyStartDate = moment(startDate).format('DD.MM.YYYY');
		const prettyEndDate = moment(endDate).format('DD.MM.YYYY');
		if (prettyStartDate === 'Invalid date') return;
		changeCustomPeriodText(`${prettyStartDate} - ${prettyEndDate}`);
		setCalendarModalVisible(false);
		setActivePeriodOption(3);
	};

	const createFilterGroup = (item: ListRenderItemInfo<OptionsItem>) => {
		const curItem = item.item;
		return (
			<View style={[styles.filterGroupContainer, item.index === 0 && { marginTop: 10 }]}>

				<Text style={styles.filterGroupTitleText}>
					{curItem.title}
				</Text>

				<View style={styles.filterChipsContainer}>
					{curItem.values.map((val, index) => {
						return (
							<View
								key={index}
								// eslint-disable-next-line max-len
								style={[styles.chipContainer, curItem.activeItemIndex === index && { backgroundColor: '#96B4BD' }]}
							>
								<TouchableOpacity onPress={() => {
									if (item.index === 3) {
										if (index === 3)
											setCalendarModalVisible(true);

										else {
											changeCustomPeriodText('Произвольный');
                      curItem.setActiveItemIndex?.(index);
										}
									}
									else curItem.setActiveItemIndex?.(index);
								}}
								>
									<Text style={[styles.chipText, curItem.activeItemIndex === index && { color: '#005670' }]}>
										{val}
									</Text>
								</TouchableOpacity>
							</View>
						);
					})}
				</View>
			</View>
		);
	};

	const [calendarModalVisible, setCalendarModalVisible] = React.useState(false);

	const [activeRateOption, setActiveRateOption] = React.useState(0);
	const [activeMeasureOption, setActiveMeasureOption] = React.useState(0);
	const [activeChartOption, setActiveChartOption] = React.useState(0);
	const [activePeriodOption, setActivePeriodOption] = React.useState(0);

	optionsData.map((element, index) => {
		if (index === 0) {
			element.activeItemIndex = activeRateOption;
			element.setActiveItemIndex = setActiveRateOption;
		}
		else if (index === 1) {
			element.activeItemIndex = activeMeasureOption;
			element.setActiveItemIndex = setActiveMeasureOption;
		}
		else if (index === 2) {
			element.activeItemIndex = activeChartOption;
			element.setActiveItemIndex = setActiveChartOption;
		}
		else {
			element.activeItemIndex = activePeriodOption;
			element.setActiveItemIndex = setActivePeriodOption;
		}
	});

	const [markedDates, setMarkedDates] = React.useState({});
	const [isStartDatePicked, setIsStartDatePicked] = React.useState(false);
	const [isEndDatePicked, setIsEndDatePicked] = React.useState(false);
	const [startDate, setStartDate] = React.useState('');
	const [endDate, setEndDate] = React.useState('');

	const onDayPress: DateCallbackHandler = (day: DateObject) => {
		if (!isStartDatePicked) {
			let mDates: { [index: string]: {} } = {};
			mDates[day.dateString] = { color: '#005670', textColor: '#FFFFFF' };
			setMarkedDates(mDates);
			setIsStartDatePicked(true);
			setIsEndDatePicked(false);
			setStartDate(day.dateString);
			setEndDate(day.dateString);
		}
		else {
			let mDates: { [index: string]: {} } = markedDates;
			let mStartDate = moment(startDate);
			let mEndDate = moment(day.dateString);
			let range = mEndDate.diff(mStartDate, 'days');
			if (range === 0) {
				setMarkedDates({});
				setIsStartDatePicked(false);
				setIsEndDatePicked(false);
				setStartDate('');
				setEndDate('');
			}
			else if (range > 0) {
				mDates[startDate] = { ...mDates[startDate], startingDay: true };
				for (let i = 1; i <= range; i++) {
					let mTempDate: moment.Moment = mStartDate.add(1, 'day');
					let tempDate: string = moment(mTempDate).format('YYYY-MM-DD');
					if (i < range)
						mDates[tempDate] = { color: '#005670', textColor: '#FFFFFF' };
					else
						mDates[tempDate] = { endingDay: true, color: '#005670', textColor: '#FFFFFF' };
				}
				setMarkedDates(markedDates);
				setIsStartDatePicked(false);
				setIsEndDatePicked(true);
				setEndDate(day.dateString);
			}
			else {
				mDates[day.dateString] = { ...mDates[startDate], startingDay: true };
				mEndDate = [mStartDate, mStartDate = mEndDate][0]; //swap values
				range = -range;
				for (let i = 1; i <= range; i++) {
					let mTempDate: moment.Moment = mStartDate.add(1, 'day');
					let tempDate: string = moment(mTempDate).format('YYYY-MM-DD');
					if (i < range)
						mDates[tempDate] = { color: '#005670', textColor: '#FFFFFF' };
					else
						mDates[tempDate] = { endingDay: true, color: '#005670', textColor: '#FFFFFF' };
				}
				setMarkedDates(markedDates);
				setIsStartDatePicked(false);
				setIsEndDatePicked(true);
				setEndDate(startDate);
				setStartDate(day.dateString);
			}
		}
	};

	return (
		<Host>
			<View style={styles.container}>

				<ProfileHead
					userData={userData}
					onNotifications={onNotifications}
					onProfile={onProfile} />

				<Text style={styles.headText}>
					Аналитика
				</Text>

				<View style={styles.chartSettings}>

					<View style={[styles.dropdownView, { marginRight: 5 }]}>

						<CustomDropDown
							data={['Кухня', 'Спальня', 'Гостиная']}
							onChange={(el: string) => console.log(el)}
							containerStyle={styles.dropdownContainer}
							style={styles.dropdown} />
					</View>

					<View style={styles.filterContainer}>

						<View style={[styles.filterButtonContainer, { marginLeft: 5 }]}>

							<TouchableOpacity style={styles.filterButton} onPress={onOptionsOpen}>

								<Text style={styles.filterText}>
									Фильтр
								</Text>

								<SMIcons
									name='ic_options'
									size={15}
									width={24}
									height={24}
									color='#000000'
									style={styles.filterIcon} />

							</TouchableOpacity>

						</View>

					</View>

				</View>

				<Text style={styles.predictionText}>
					Прогноз на январь 1100 m³
				</Text>

				<View style={styles.graphicContainer}>

					<BarChart
						style={{ flex: 1 }}
						xAxis={xAxis}
						data={data}
						legend={legend}
						drawValueAboveBar={false}
						chartDescription={{ text: '' }}
						// onSelect={this.handleSelect.bind(this)}
						onChange={(event) => console.log(event.nativeEvent)} />

				</View>
			</View>

			<Modal
				animationType='fade'
				transparent={true}
				visible={calendarModalVisible}
				style={styles.modalContainer}
				onRequestClose={() => {
					setCalendarModalVisible(false);
				}}
			>

				<TouchableOpacity
					style={styles.calendarOpacity}
					activeOpacity={1}
					onPressOut={() => {
						setCalendarModalVisible(false);
					}}
				>

					<TouchableWithoutFeedback>

						<View>

							<Calendar
								enableSwipeMonths={true}
								maxDate={Date()}
								monthFormat={'MMMM yyyy'}
								theme={calendarTheme}
								// markingType="period"
								onDayPress={onDayPress}
								markedDates={markedDates}
								// markedDates={{
								//   "2021-01-16": { startingDay: true, color: "green" },
								//   "2021-01-17": { color: "green" },
								//   "2021-01-18": { color: "green" },
								//   "2021-01-19": { endingDay: true, color: "gray" }
								// }}
								markingType='period'
								style={styles.calendarContainer} />

							<View style={styles.applyPeriodButtonContainer}>

								<Button header='Применить' onPress={() => applyCustomPeriod()} style={styles.applyPeriodButton} />

							</View>

						</View>

					</TouchableWithoutFeedback>

				</TouchableOpacity>

			</Modal>

			<Portal>
				<Modalize
					ref={optionsModalizeRef}
					withHandle={true}
					modalStyle={styles.optionsModalStyle}
					closeOnOverlayTap={true}
					tapGestureEnabled={true}
					panGestureComponentEnabled
					threshold={50}
					handlePosition='outside'
					modalHeight={400}
					panGestureEnabled
					useNativeDriver
					flatListProps={{
						data: optionsData,
						renderItem: createFilterGroup,
						keyExtractor: (item: OptionsItem) => item.title,
						showsVerticalScrollIndicator: false,
					}} />
			</Portal>
		</Host>
	);
};
