import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

//components
import { GilroyText, HeadlineText } from 'library/components/atoms';
import { ProfileHead } from 'library/components/molecules';
//styles
import styles from './MeterSettings.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

//types
type MeterSettingsViewProps = {
    userData: {
        name: string;
        surname: string;
        address: string;
		photo: string;
    };
    place: string;
    scenario: string;
    isWaterManagement: boolean;
    rate: string;
    limit: string;
};

export const MeterSettingsView: React.FC<MeterSettingsViewProps> = ({
    userData,
    place,
    scenario,
    isWaterManagement,
    rate,
    limit,
}) => {
	return (
		<View style = {styles.container} >

            <ProfileHead userData={userData} />

            <GilroyText 
                type="Semibold"
                size="g1"
                styleText={styles.header}
            >
                {place}
            </GilroyText>

            <SafeAreaView>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* photo */}

                    <View style={[styles.cardContainer, {marginTop: 10}]}>

                        <TouchableOpacity>
                            <GilroyText 
                                size="g2" 
                                type="Medium" 
                                styleText={styles.photoCardHeader} 
                            >
                                Фото счетчика
                            </GilroyText>
                        </TouchableOpacity>

                    </View>

                    {/* scenario */}

                    <View style={styles.cardContainer}>

                        <GilroyText 
                            size="g2" 
                            type="Medium" 
                            styleText={styles.cardHeader} 
                        >
                            Сценарий
                        </GilroyText>

                        <View style={styles.cardEditableContantContainer}>

                            <GilroyText 
                                size="g2" 
                                type="Medium" 
                                styleText={styles.scenarioType} 
                            >
                                {scenario}
                            </GilroyText>

                            <TouchableOpacity style={styles.changeContainer}>

                                <GilroyText 
                                    size="g3" 
                                    type="Medium" 
                                    styleText={styles.changeText} 
                                >
                                    Изменить
                                </GilroyText>

                            </TouchableOpacity>

                        </View>

                    </View>

                    {/* water management */}

                    <View style={styles.cardContainer}>

                        <GilroyText 
                            size="g2" 
                            type="Medium" 
                            styleText={styles.cardHeader} 
                        >
                            Управление водой
                        </GilroyText>

                        <View style={styles.cardEditableContantContainer}>

                            <GilroyText 
                                size="g2" 
                                type="Medium" 
                                styleText={styles.scenarioType} 
                            >
                                {isWaterManagement ? "Включено" : "Выключено"}
                            </GilroyText>

                            <TouchableOpacity style={styles.changeContainer}>

                                <GilroyText 
                                    size="g3" 
                                    type="Medium" 
                                    styleText={[styles.changeText, {color: '#FF5B5B'}]} 
                                >
                                    {isWaterManagement ? "Выключить" : "Включить"}
                                </GilroyText>

                            </TouchableOpacity>

                        </View>

                    </View>

                    {/* rate */}

                    <View style={styles.cardContainer}>

                        <GilroyText 
                            size="g2" 
                            type="Medium" 
                            styleText={styles.cardHeader} 
                        >
                            Тариф
                        </GilroyText>

                        <View style={styles.cardEditableContantContainer}>

                            <GilroyText 
                                size="g2" 
                                type="Medium" 
                                styleText={styles.scenarioType} 
                            >
                                {rate}
                            </GilroyText>

                            <TouchableOpacity style={styles.changeContainer}>

                                <GilroyText 
                                    size="g3" 
                                    type="Medium" 
                                    styleText={styles.changeText} 
                                >
                                    Изменить

                                </GilroyText>

                            </TouchableOpacity>

                        </View>

                    </View>

                    {/* limit */}

                    <View style={styles.cardContainer}>

                        <GilroyText 
                            size="g2" 
                            type="Medium" 
                            styleText={styles.cardHeader} 
                        >
                            Лимит
                        </GilroyText>

                        <View style={styles.cardEditableContantContainer}>

                            <GilroyText 
                                size="g2" 
                                type="Medium" 
                                styleText={styles.scenarioType} 
                            >
                                {limit}
                            </GilroyText>

                            <TouchableOpacity style={styles.changeContainer}>

                                <GilroyText 
                                    size="g3" 
                                    type="Medium" 
                                    styleText={styles.changeText} 
                                >
                                    Изменить

                                </GilroyText>

                            </TouchableOpacity>

                        </View>

                    </View>

                </ScrollView>

            </SafeAreaView>

		</View>
	);
};
