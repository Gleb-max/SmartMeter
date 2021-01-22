import React from 'react';
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback, ImageSourcePropType } from 'react-native';

//other deps
import StarRating from 'react-native-star-rating';
import QRCode from 'react-native-qrcode-svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//components
import { Button, GilroyText, RobotoText } from 'library/components/atoms';
import { CustomTextInput } from 'library/components/molecules';

//styles
import styles from './RequestDetails.styles';
import { DimensionsManager } from 'library/modules';

//types
type RequestDetailsProps = {
    requestName: string;
    requestDate: string;
    masterName: string;
    masterPhone: string;
    qrContent: string;
    logoUri: ImageSourcePropType;
};

export const RequestDetailsView: React.FC<RequestDetailsProps> = ({
	requestName,
	requestDate,
	masterName,
	masterPhone,
	qrContent,
	logoUri,
}) => {
	//state
	const [rating, setRating] = React.useState<number>(0);
	const [qrShowing, setQrShowing] = React.useState<boolean>(false);

	//handlers
	const onStarRatingPress = (newRating: number) => {
		setRating(newRating);
	};

	return (
		<KeyboardAwareScrollView>
			<View style={styles.container}>
				<GilroyText
					type='Semibold'
					size='g1'
					style={styles.header}
				>
					Заявка от
					{' '}
					{requestDate}
				</GilroyText>

				<View style={styles.cardContainer}>
					<GilroyText
						type='Semibold'
						size='g3'
						style={styles.cardHeader}
						children='Мастер' />

					<View style={styles.masterInfoContainer}>
						<GilroyText
							type='Medium'
							size='g2'
							style={styles.cardText}
							children={masterName} />

						<GilroyText
							type='Medium'
							size='g3'
							style={styles.phoneText}
							children={masterPhone} />
					</View>
				</View>

				<View style={[styles.cardContainer, { marginTop: 24 }]}>
					<GilroyText
						type='Semibold'
						size='g3'
						style={styles.cardHeader}
						children='Услуга' />

					<GilroyText
						type='Medium'
						size='g2'
						style={styles.cardText}
						children={requestName} />
				</View>

				<CustomTextInput
					style={styles.review}
					placeholder={'Оставьте отзыв'} />

				<View style={styles.ratingContainer}>
					<RobotoText
						style={styles.ratingText}
						type='Regular'
						size='r1'
						children='Оцените работу' />

					<StarRating
						starStyle={styles.ratingStar}
						rating={rating}
						selectedStar={onStarRatingPress}
						fullStarColor='#FFFF4D'
						animation='swing'
						maxStars={5} />
				</View>

				<Button
					header='Сгенерировать QR-код'
					onPress={() => setQrShowing(true)}
					style={styles.qrButton} />

			</View>
			<Modal
				animationType='fade'
				transparent={true}
				visible={qrShowing}
				style={styles.modalContainer}
				onRequestClose={() => {
					setQrShowing(false);
				}}
			>
				<TouchableOpacity
					style={styles.qrOpacity}
					activeOpacity={1}
					onPressOut={() => {
						setQrShowing(false);
					}}
				>
					<TouchableWithoutFeedback>
						<View>
							<QRCode
								value={qrContent}
								color='#005670'
								// enableLinearGradient
								// linearGradient={["#005670", "#747474"]}
								logoMargin={40}
								quietZone={10}
								logo={logoUri}
								size={DimensionsManager.getScreenWidth() - 100} />
						</View>
					</TouchableWithoutFeedback>
				</TouchableOpacity>
			</Modal>
		</KeyboardAwareScrollView >
	);
};
