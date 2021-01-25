import React from 'react';
import { View, FlatList } from 'react-native';

//components
import { AdviceCard, PressableIcon, ProfileHead } from 'library/components/molecules';
import { GilroyText } from 'library/components/atoms';

//styles
import styles from './Advices.styles';

//types
type AdvicesProps = {
	userData: {
		name: string;
			surname: string;
			photo: string;
			address: string;
	};
	advicesList: string[];
	onSelectAdvice: (adviceIndex: number) => void;
};

export const AdvicesView: React.FC<AdvicesProps> = ({
	userData,
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

	return (
		<View style={ styles.container }>

			<ProfileHead 
				userData={userData} />

			<GilroyText
				style = {styles.header}
				type = 'Semibold'
				size = 'g1'
			>
				Полезные советы
			</GilroyText>

			<FlatList
				data={advicesList}
				renderItem={_renderListItem}
				numColumns={2}
				columnWrapperStyle={styles.flatList}
				keyExtractor={(item: string, index: number) => item + index}
				style={{ }}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.flatListContainer} />
		</View>
	);
};
