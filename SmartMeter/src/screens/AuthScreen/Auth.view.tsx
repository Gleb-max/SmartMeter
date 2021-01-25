import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, BackHandler, TouchableOpacity } from 'react-native';

//other deps
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';

//modules
import { DimensionsManager } from 'library/modules';

//components
import { Button, GilroyText, RobotoText } from 'library/components/atoms';
import { CustomTextInput, ConfirmationField } from 'library/components/molecules';

//styles
import styles from './Auth.styles';

//types
interface CarouselItemProps {
    type: string;
}

interface State {
  activeIndex: number;
  carouselItems: CarouselItemProps[];
}

let deque: number [] = [];
let lastIndex: number | undefined;
let secondsLeft: number = 61;

type AuthViewProps = {
	onSendCode: () => void;
}

//images
import logo from '@assets/images/authLogo_c.png';

//contants
var initialIndex = 0;

export const AuthView: React.FC<AuthViewProps> = ({
	onSendCode,
}) => {
	const generateCarouselData = (activeIndex: number | undefined) => {
		const result = {
			activeIndex: activeIndex || 0,
			carouselItems: [{
				type: 'login',
			}, {
				type: 'register',
			}, {
				type: 'restore',
			}],
		};
		return result;
	};
	const [data, setData] = useState(generateCarouselData(initialIndex));

	const onCode = () => {
		setTimerValue(secondsLeft);
		setIsStart(true);
		setIsTimerTextDisable(true);
	};

	//timer
	const [timerValue, setTimerValue] = React.useState(secondsLeft);
	const [isStart, setIsStart] = React.useState(false);
	const [isTimerTextDisable, setIsTimerTextDisable] = React.useState(false);
	const isCodeScreen = (data.activeIndex === 2);

	//callbacks
	const _onTick = React.useCallback(() => {
		if (timerValue <= 1) {
			setIsStart(false);
			setIsTimerTextDisable(false);
			setTimerValue(0);
		}
		else
			setTimerValue(timerValue - 1);
	}, [timerValue]);

	//effects
	React.useEffect(() => {
		if (isStart && isCodeScreen) {
			setIsTimerTextDisable(true);
			setTimeout(() => {
				_onTick();
			}, 1000);
		}
		if (timerValue < 1) {
			setIsStart(false);
			setIsTimerTextDisable(false);
		}
	}, [_onTick, isCodeScreen, isStart, data.activeIndex, timerValue]);

	const goTo = (index: number, clearDeque: boolean = false) => {
		if (index === 2) {
			setIsStart(true);
			setTimerValue(secondsLeft);
		}
		else {
			setIsStart(false);
			setTimerValue(secondsLeft);
			setIsTimerTextDisable(false);
		}
		if (clearDeque) {
			deque = [];
			setData(generateCarouselData(index));
		}
		else {
			if (deque.length !== 0) {
				let last = deque[deque.length - 1];

				if (last === index)
					setData(generateCarouselData(deque.pop()));

				else {
					setLastIndex(data.activeIndex);
					deque.push(data.activeIndex);
					setData(generateCarouselData(index));
				}
			}
			else {
				setLastIndex(data.activeIndex);
				deque.push(data.activeIndex);
				setData(generateCarouselData(index));
			}
		}
	};

	const setLastIndex = (index: number) => {
		if (index !== 2)
			lastIndex = index;
	};

	useEffect(() => {
		const backAction = () => {
			let last = deque.pop();
			if (last === undefined) {
				initialIndex = data.activeIndex;
				BackHandler.exitApp();
			}
			else {
				setData(generateCarouselData(last));
				setIsStart(false);
				setTimerValue(secondsLeft);
			}
			return true;
		};

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction
		);
		return () => backHandler.remove();
	}, [data.activeIndex]);

	const renderHeader = (containerColor: string = '#005670', textColor: string = '#FFFFFF') => {
		return (
			<View style={[styles.headerContainer, { backgroundColor: containerColor }]}>
				<FastImage
					source={logo}
					style={{ width: 46, height: 50 }} />

				<Text style={[styles.headerText, { color: textColor }]}>
					SmartMeter
				</Text>
			</View>
		);
	};

	const renderLogin = () => {
		return (
			<View style={styles.viewContainer}>
				{renderHeader()}

				<View style={[styles.fieldsContainer]}>
					<View style={styles.welcomeContainer}>
						<GilroyText
							type='Semibold'
							size={'g2'}
							styleText={{
								fontStyle: 'normal',
								fontWeight: '600',
								lineHeight: 29,
							}}
						>
							Вход
						</GilroyText>

						<GilroyText
							type='Regular'
							size={'g4'}
							styleText={{
								marginTop: 4,
								fontStyle: 'normal',
								fontWeight: '400',
								lineHeight: 18,
							}}
						>
							Добро пожаловать
						</GilroyText>
					</View>

					<CustomTextInput
						value=''
						onChange={() => {}}
						placeholder='Телефон'
						keyboardType='decimal-pad'
						style={{ marginBottom: 50 }} />

					<View style={styles.formContainer}>
						<Button
							header='Войти'
							onPress={() => goTo(2)} />

						<View style={styles.authTextContainer}>
							<Text style={[styles.authTextCommon, styles.authText]}>
								Нет аккаунта?
								{' '}
							</Text>

							<TouchableOpacity onPress={() => goTo(1)}>
								<Text style={[styles.authTextCommon, styles.authButton]}>
									Создать
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	};

	const renderRegister = () => {
		return (
			<View style={styles.viewContainer}>
				{renderHeader()}
				<View style={styles.fieldsContainer}>
					<GilroyText
						type='Semibold'
						size={'g2'}
						styleText={{
							fontStyle: 'normal',
							fontWeight: '600',
							lineHeight: 29,
							alignSelf: 'flex-start',
						}}
					>
						Регистрация
					</GilroyText>

					<CustomTextInput
						value={''}
						onChange={() => {}}
						placeholder='Имя'
						style={{ marginBottom: 18 }} />

					<CustomTextInput
						value={''}
						onChange={() => { }}
						placeholder='Телефон'
						style={{ marginBottom: 20 }} />

					<View style={styles.formContainer}>
						<Button
							header='Зарегистрироваться'
							onPress={() => goTo(2)}
							style={{ marginTop: 50 }} />

						<View style={styles.authTextContainer}>
							<Text style={[styles.authTextCommon, styles.authText]}>
								Есть аккаунт?
								{' '}
							</Text>

							<TouchableOpacity onPress={() => goTo(0)}>

								<Text style={[styles.authTextCommon, styles.authButton]}>
									Войти
								</Text>
							</TouchableOpacity>
						</View>

					</View>
				</View>
			</View>
		);
	};

	const renderRestore = () => {
		return (
			<View style={styles.container}>
				{renderHeader('#FFFFFF', '#005670')}
				<GilroyText
					type='Medium'
					size={'g2'}
					styleText={{
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: 29,
					}}
				>
					Код подтверждения
				</GilroyText>

				<View style={styles.codeContainer}>
					<RobotoText
						type='Light'
						size={'r1'}
						style={styles.codeText}
					>
						Код был отправлен на номер
					</RobotoText>

					<RobotoText
						type='Light'
						size={'r1'}
						style={styles.codeText}
					>
						+7(907)555-0101
					</RobotoText>
				</View>

				<TouchableOpacity onPress={() => goTo(lastIndex || 0, true)}>
					<RobotoText
						type='Light'
						size={'r2'}
						styleText={styles.changeNumText}
					>
						Изменить номер
					</RobotoText>
				</TouchableOpacity>
				<View style={{ flex: 1, paddingTop: 20 }}>
					<ConfirmationField
						cellCount={4}
						containerStyle={{ marginTop: 10 }}
						onSubmit={() => {}} />
				</View>

				<Button
					header='Подтвердить'
					onPress={() => {
						onSendCode();
					}}
					style={[{ marginHorizontal: 30 }, styles.sendCode]} />

				{(!isTimerTextDisable)
					? (
						<Button
							header='Получить новый код'
							onPress={() => {
								onCode();
							}}
							style={[{ marginHorizontal: 30 }, styles.newCode]} />
					) : (
						<>
							<RobotoText
								type='Light'
								size={'r2'}
								styleText={styles.getCodeText}
							>
								Получить новый код через
							</RobotoText>

							<RobotoText
								type='Medium'
								size={'r2'}
								style={[styles.timeText, styles.newCode]}
							>
								{timerValue.toString()}
							</RobotoText>
						</>
					)}
			</View>
		);
	};

	const renderItem = () => {
		switch (data.activeIndex) {
			case 0:
				return renderLogin();
			case 1:
				return renderRegister();
			case 2:
				return renderRestore();
			default:
				return null;
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<Carousel
					layout={'tinder'}
					sliderWidth={DimensionsManager.getScreenWidth()}
					itemWidth={DimensionsManager.getScreenWidth()}
					data={data.carouselItems}
					renderItem={renderItem}
					scrollEnabled={false} />
			</View>
		</SafeAreaView>
	);
};
