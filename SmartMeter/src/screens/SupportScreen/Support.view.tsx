import React, { ReactNode } from 'react';
import { SafeAreaView, View, FlatList, ScrollView, Image, TouchableOpacity, Text, ListRenderItemInfo, ListRenderItem, TextInput } from 'react-native';

//other deps
import { isAfter } from 'date-fns';

//components
import { SupportChatItem, PressableIcon } from 'library/components';

//styles
import styles from './Support.styles';
import { GilroyText, SMIcons } from 'library/components/atoms';

//types
type SupportViewProps = {
};

type Message = {
    text: string;
    id: number;
    own?: boolean | undefined;
    isLoading?: boolean | undefined;
    isError?: boolean | undefined;
}

//constants
const chatData: Message[] = [{
	text: 'Привет!',
	id: 1,
}, {
	text: 'Я помощник SmartMeter',
	id: 2,
}, {
	text: 'Опиши свою проблему',
	id: 3,
}, {
	text: 'Описание проблемы лалалалалалллаал',
	own: true,
	id: 4,
}, {
	text: 'Отлично, а теперь напиши номер подъезда, этаж и квартиру',
	own: false,
	id: 5,
}, {
	text: '1 подъезд, 1 квартира, 2 этаж',
	own: true,
	id: 6,
}, {
	text: 'Не забудь оставить телефон, чтобы мы могли с тобой связаться',
	own: false,
	id: 7,
}, {
	text: '+7 (922) 345 6789',
	own: true,
	id: 8,
}, {
	text: 'Спасибо за обращение! Мы уже работаем над вашим вопросом.',
	own: false,
	id: 9,
}, {
	text: 'Ага знаю я вас! Ничего вы не работаете',
	own: true,
	id: 10,
}, {
	text: 'А вот неправда',
	own: false,
	id: 11,
}];

export const SupportView: React.FC<SupportViewProps> = ({
}) => {
	//state
	const [sendingMessage, setSendingMessage] = React.useState('');
	const [chatFlatList, setChatFlatList] = React.useState<FlatList<Message>>();

	//callbacks
	const scrollToEnd = React.useCallback(
		() => {
            chatFlatList?.scrollToEnd({ animated: true });
		}, [chatFlatList]);

	//renders
	const _renderChatMessage = (itemInfo: ListRenderItemInfo<Message>): ReactNode => {
		const message = itemInfo.item;
		return (
			<SupportChatItem
				message={message.text}
				own={message.own}
				isError={message.isError}
				style={[itemInfo.index === 0 && { marginTop: 36 }]} />
		);
	};

	const sendMessage = () => {
		if (sendingMessage !== ''){
			chatData.push({
				text: sendingMessage,
				own: true,
				id: chatData[chatData.length - 1].id + 1,
				isError: true,
			});
			setSendingMessage('');
		}
	};

	return (
		<View style = {styles.container}>
			<View style={styles.headerContainer}>

				<GilroyText
					type='Semibold'
					size='g1'
					style={styles.header}
				>
					Поддержка
				</GilroyText>
			</View>

			<SafeAreaView style={styles.chatContainer}>
				<FlatList<Message>
					data={chatData}
					ref={(list: any) => setChatFlatList(list)}
					initialScrollIndex={chatData.length - 1}
					renderItem={_renderChatMessage}
					keyExtractor={(item) => item.id.toString()}
					showsVerticalScrollIndicator={false}
					style={styles.chatList} />
			</SafeAreaView>

			<View style={styles.sendContainer}>
				<TextInput
					style={styles.messageInput}
					value={sendingMessage}
					underlineColorAndroid='transparent'
					onChangeText={(text: string) => setSendingMessage(text)} />

				<TouchableOpacity style={styles.icon}>
					<PressableIcon
						iconName='ic_send_message'
						width={30}
						height={30}
						size={30}
						color='#005670'
						onPress={sendMessage} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
