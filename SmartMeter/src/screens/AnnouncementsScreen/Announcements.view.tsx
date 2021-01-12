import React from 'react';
import {View} from 'react-native';

//styles
import styles from "./Announcements.styles";

//components
import {AnnouncementCard} from 'library/components'
import {CustomDropDown} from 'library/components'
import {PressableIcon} from 'library/components'

type AnnouncementsViewProps = {

}

export const AnnouncementsView: React.FC<AnnouncementsViewProps> = ({

}) => {
    return (
        <View style={styles.container}>
            {/* <AnnouncementCard date="21.12.20" content="21 декабря 2020г. с 10 - 00 до окончания работ в подъездах №6,7,8,9,10 будет отключено ХВС и ГВС, в связи с проведением плановых ремонтных работ. Сделайте необходимый запас воды на период отключения."/> */}
            {/* <AnnouncementCard date="10.11.20"  content="10 ноября 2020 г. с 9-00 до окончания работ в подъезде № 1 с 1 по 9 этаж будет отключение горячей воды, в связи проведением ремонтных работ."/> */}
            <PressableIcon iconName="ic_notification" onPress={() => console.log("Pupupupu2")} size={30} color={'#000000'} withNotif={true} />
            {/* <CustomDropDown values={["Неделя", "Месяц", "Год", "Произвольный"]} /> */}
        </View>
    );
}
