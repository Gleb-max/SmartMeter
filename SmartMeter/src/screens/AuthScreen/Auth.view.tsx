import React, { Component, useState, useEffect } from "react";
import { Text, View, SafeAreaView, Alert, BackHandler, TouchableOpacity } from "react-native";

import Carousel from "react-native-snap-carousel";

//styles
import styles from './Auth.styles';

//components
import { CustomTextInput, Button, ConfirmationField, GilroyText, RobotoText } from 'library/components';
import { DimensionsManager } from '../../library/modules';

var initialIndex = 0;

interface CarouselItemProps {
    type: string;
}

// interface Props {
//   carouselItems?: ItemProps;
// }

interface State {
  activeIndex: number;
  carouselItems: CarouselItemProps[];
}

let deque: number [] = [];
let lastIndex: number | undefined = undefined;
let secondsLeft: number = 2;

type AuthViewProps = {

}

export const AuthView: React.FC<AuthViewProps> = ({

}) => {
    const generateCarouselData = (activeIndex: number | undefined) => {
        const result = {
            activeIndex: activeIndex || 0,
            carouselItems: [
                {
                    type: "login"
                },
                {
                    type: "register"
                },
                {
                    type: "restore"
                },
            ],
        };
        return result;
    }
    const [data, setData] = useState(generateCarouselData(initialIndex));

    const onCode = () => {
        setTimerValue(secondsLeft)
        setIsStart(true)
        setIsTimerTextDisable(true)
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
	
	const _onCode = React.useCallback(() => {
		setIsStart(true);
    }, [onCode]);

    const goTo = (index: number, clearDeque: boolean = false) => {
        // setLastIndex(data.activeIndex)
        // deque.push(data.activeIndex)
        // setData(generateCarouselData(index));
        // if (index == 2) {
        //     setIsStart(true)
        //     setTimerValue(secondsLeft)
        // }
        // else {
        //     setIsStart(false)
        //     setTimerValue(secondsLeft)
        // }
        if (index == 2) {
            setIsStart(true)
            setTimerValue(secondsLeft)
        }
        else {
            setIsStart(false)
            setTimerValue(secondsLeft)
            setIsTimerTextDisable(false)
        }
        if (clearDeque) {
            deque = []
            setData(generateCarouselData(index));
        }
        else {
            if (deque.length != 0) {
                let last = deque[deque.length - 1];
                console.log(last == index)
                if (last == index) setData(generateCarouselData(deque.pop()))
                else {
                    setLastIndex(data.activeIndex)
                    deque.push(data.activeIndex)
                    setData(generateCarouselData(index));
                }
            }
            else {
                setLastIndex(data.activeIndex)
                deque.push(data.activeIndex)
                setData(generateCarouselData(index));
            }
        }
    }

    const setLastIndex = (index: number) => {
        if(index != 2) lastIndex = index
    };

    useEffect(() => {
        const backAction = () => {
            let last = deque.pop();
            if (last === undefined) {
                initialIndex = data.activeIndex
                BackHandler.exitApp()
            }
            else {
                setData(generateCarouselData(last))
                setIsStart(false)
                setTimerValue(secondsLeft)
            }
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

    const handleLogIn = () => {

    };

    const renderHead = (containerColor: string = '#005670', textColor: string = '#FFFFFF') => {
        return (
            <View style={[styles.headContainer, {backgroundColor: containerColor}]}>
                <Text style={[styles.headText, {color: textColor}]}>SmartMeter</Text>
            </View>
        );
    }

    const renderLogin = () => {
        return (
            <View style={styles.viewContainer}>
                {renderHead()}
                <View style={[styles.fieldsContainer]}>
                    <View style={styles.welcomeContainer}>
                        <GilroyText 
                            type="Semibold" 
                            text="Вход" 
                            size={24}
                            style={{
                                fontStyle: 'normal', 
                                fontWeight: '600', 
                                lineHeight: 29, 
                            }} />
                        <GilroyText 
                            type="Regular"
                            text="Добро пожаловать!"
                            size={15} 
                            style={{
                                fontStyle: 'normal', 
                                fontWeight: '400', 
                                lineHeight: 18, 
                            }} />
                    </View>
                    
                    <CustomTextInput placeholder="Телефон" style={{marginBottom: 50}} />

                    <View style={styles.formContainer}>
                        <Button header="Войти" onPress={() => {goTo(2)}} />

                        <View style={styles.authTextContainer}>

                            <Text style={[styles.authTextCommon, styles.authText]}>Нет аккаунта? </Text>

                            <TouchableOpacity onPress={() => goTo(1)}>

                                <Text style={[styles.authTextCommon, styles.authButton]}>Создать</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        );
    }

    const renderRegister = () => {
        return (
            <View style={styles.viewContainer}>
                {renderHead()}
                <View style={styles.fieldsContainer}>
                    <GilroyText 
                        type="Semibold" 
                        text="Регистрация" 
                        size={24} 
                        style={{
                            fontStyle: 'normal', 
                            fontWeight: '600', 
                            lineHeight: 29, 
                            alignSelf: 'flex-start'
                        }} />

                    <CustomTextInput placeholder="Имя" style={{marginBottom: 18}} />

                    <CustomTextInput placeholder="Телефон" style={{marginBottom: 20}} />

                    <View style={styles.formContainer}>

                        <Button header="Зарегистрироваться" onPress={() => {goTo(2)}} style={{marginTop: 50}} /> 

                        <View style={styles.authTextContainer}>

                            <Text style={[styles.authTextCommon, styles.authText]}>Есть аккаунт? </Text>

                            <TouchableOpacity onPress={() => goTo(0)}>

                                <Text style={[styles.authTextCommon, styles.authButton]}>Войти</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        );
    }

    const renderRestore = () => {
        return (
            <View style={styles.container}>
                {renderHead('#FFFFFF', '#005670')}
                <GilroyText 
                        type="Medium" 
                        text="Код подтверждения" 
                        size={24} 
                        style={{
                            fontStyle: 'normal', 
                            fontWeight: '500', 
                            lineHeight: 29, 
                        }} />
                <View style={styles.codeContainer}>
                    <RobotoText 
                        type="Light"
                        text="Код был отправлен на номер" 
                        size={18}
                        style={styles.codeText} 
                    />
                    <RobotoText 
                        type="Light"
                        text="+ 7 (907) 555-0101" 
                        size={18}
                        style={styles.codeText} 
                    />
                </View>
                <TouchableOpacity onPress={() => goTo(lastIndex || 0, true)}>
                    <RobotoText 
                        type="Light"
                        text="Изменить номер" 
                        size={17}
                        style={styles.changeNumText} 
                    />
                </TouchableOpacity>
                <View style={{flex: 1, paddingTop: 20}}>
                    <ConfirmationField cellCount={4} containerStyle={{marginTop: 10}} onSubmit={() => {console.log(isCodeScreen)}} />
                </View>
                {
                    !isTimerTextDisable ? (
                        <Button header="Получить новый код" onPress={() => {onCode()}} style={[{marginHorizontal: 30}, styles.newCode]} />
                    ) : (
                        <>
                            <RobotoText 
                                type="Light"
                                text="Получить новый код через" 
                                size={16}
                                style={styles.getCodeText} />
                            <RobotoText 
                                type="Medium"
                                text={timerValue.toString()}
                                size={16}
                                style={[styles.timeText, styles.newCode]} />
                        </>
                    )
                }
            </View>
        );
    }

    const renderItem = ({ item, index }: { item: CarouselItemProps; index: number }) => {
        // console.log(`render item called for ${index}`)
        // switch (item.type) {
        //     case 'login':
        //         return renderLogin();
        //     case 'register':
        //         return renderRegister();
        //     case 'restore':
        //         return renderRestore();
        //     default:
        //         return null;
        //     }
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
                layout={"tinder"}
                sliderWidth={DimensionsManager.getScreenWidth()}
                itemWidth={DimensionsManager.getScreenWidth()}
                data={data.carouselItems}
                renderItem={renderItem}
                // onSnapToItem={(index: number) => goTo(index)}
                scrollEnabled={false}
            />
            </View>
        </SafeAreaView>
    );
}
