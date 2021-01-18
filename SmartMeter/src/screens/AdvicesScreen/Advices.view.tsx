import React from 'react';
import { View, FlatList } from 'react-native';

//components
import { AdviceCard, PressableIcon } from 'library/components/molecules';
import { GilroyText } from 'library/components/atoms';

//styles
import styles from './Advices.styles';

//types
type AdvicesProps = {
	advicesList: string[];
	onSelectAdvice: (adviceIndex: number) => void;
};

export const AdvicesView: React.FC<AdvicesProps> = ({
	advicesList,
	onSelectAdvice,
}) => {
	//renders
	const _renderListItem = React.useCallback(({ index }) => {
		return (
			<AdviceCard
				text={advicesList[index]}
				style={styles.adviceCard}
				onPress={() => onSelectAdvice(index)}
				key={index} />
		);
	}, [advicesList, onSelectAdvice]);

	const _renderHeader = React.useCallback(() => {
		return (
			<>
				<PressableIcon
					iconName='ic_notification'
					onPress={() => { }}
					size={29}
					color='black'
					withNotif={true}
					style={styles.icon} />

				<GilroyText
					type='Semibold'
					size='g1'
					style={styles.header}
				>
					Полезные советы
				</GilroyText>
			</>
		);
	}, []);

	return (
		<View style={ styles.container }>
			<FlatList
				data={advicesList}
				renderItem={_renderListItem}
				ListHeaderComponent={_renderHeader}
				numColumns={2}
				columnWrapperStyle={styles.flatList}
				keyExtractor={(item: string, index: number) => item + index}
				style={{ }}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.flatListContainer} />
		</View>
	);
};
