import React from 'react';
import {View, ScrollView, Text} from 'react-native';

//styles
import styles from "./Announcements.styles";

//components
import {AnnouncementCard} from 'library/components'
import {CustomDropDown} from 'library/components'
import {PressableIcon} from 'library/components'
import {InfoItemCard} from 'library/components/molecules/InfoItemCard'
import { T } from 'ramda';

type AnnouncementsViewProps = {

}

export const AnnouncementsView: React.FC<AnnouncementsViewProps> = ({

}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <AnnouncementCard date="21.12.20" content="21 декабря 2020г. с 10 - 00 до окончания работ в подъездах №6,7,8,9,10 будет отключено ХВС и ГВС, в связи с проведением плановых ремонтных работ. Сделайте необходимый запас воды на период отключения."/> */}
                {/* <AnnouncementCard date="10.11.20"  content="10 ноября 2020 г. с 9-00 до окончания работ в подъезде № 1 с 1 по 9 этаж будет отключение горячей воды, в связи проведением ремонтных работ."/> */}
                {/* <PressableIcon iconName="ic_notification" onPress={() => console.log("Pupupupu2")} size={30} color={'#000000'} withNotif={true} /> */}
                {/* <CustomDropDown values={["Неделя", "Месяц", "Год", "Произвольный"]} /> */}
                <Text>Объявления</Text>
                <InfoItemCard date="21.12.20" content="21 декабря 2020г. с 10 - 00 до окончания работ в подъездах №6,7,8,9,10 будет отключено ХВС и ГВС, в связи с проведением плановых ремонтных работ. Сделайте необходимый запас воды на период отключения." type="announcement" />
                <InfoItemCard date="10.11.20" content="10 ноября 2020 г. с 9-00 до окончания работ в подъезде № 1 с 1 по 9 этаж будет отключение горячей воды, в связи проведением ремонтных работ." type="announcement" />

                <Text>Уведомления</Text>
                <InfoItemCard date="10.01.21 17:56" content="Обнаружена утечка воды!" type="notification" />
                <InfoItemCard date="08.01.21 13:21" content="Cценарий сменен на “Никого нет”" type="notification" />

                <Text>Новости</Text>
                <InfoItemCard date="07.01.21" content="11.01.21 пройдет собрание собственников во втором дворе в 11:30. Просьба присутствовать всем жильцам." type="news" />
                <InfoItemCard date="31.12.20" content="Поздравляем всех жильцов с наступающим новым годом! Желаем здоровья и счастья!" type="news" />
            </View>
        </ScrollView>
    );
}
