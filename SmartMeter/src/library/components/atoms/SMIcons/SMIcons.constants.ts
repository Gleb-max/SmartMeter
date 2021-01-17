/* eslint-disable max-len */
//types
import { Icons } from 'library/types';

type IconsDataMapItem = {
	d: string;
	evenOdd?: boolean;
}

type CommonIconsDataMap = Record<Icons.CommonIconName, IconsDataMapItem[]>;
type TabBarIconsDataMap = Record<Icons.TabBarIconName, IconsDataMapItem[]>;
type IconsDataMap = Record<Icons.SMIconsName, IconsDataMapItem[]>;

const commonIcons: CommonIconsDataMap = {
	ic_profile: [{
		d: 'M15.5677 4.00651c-1.5952.09915-3.05.67795-4.2783 1.70218-.1949.16252-.6444.60512-.8039.7915-.49661.58046-.87512 1.18416-1.1675 1.86211-.63216 1.46581-.74675 3.1369-.32102 4.6811.41991 1.5231 1.35032 2.8835 2.62042 3.8314.0867.0647.1237.0987.1136.1043-.0082.0046-.0943.0427-.1913.0846-1.0399.4496-2.05335 1.1025-2.94131 1.8947-.32541.2904-.78692.7693-1.09341 1.1346-1.36431 1.6263-2.23474 3.6758-2.45009 5.7688-.04591.4462-.06808.9078-.0467.9727.01885.0571.07518.1194.13105.1448.04402.02.42414.0207 10.86086.0207 10.4367 0 10.8168-.0007 10.8608-.0207.0577-.0263.1144-.0904.132-.1493.0254-.0847-.0211-.804-.081-1.2531-.2327-1.7462-.8988-3.4225-1.9321-4.8622-.3574-.498-.6804-.8757-1.1503-1.3455-.4362-.4361-.7075-.6727-1.173-1.0229-.5349-.4025-1.0873-.7448-1.6839-1.0436-.1868-.0935-.3022-.1467-.6874-.317l-.0329-.0146.1353-.1017c.6249-.4691 1.1952-1.0653 1.6341-1.7078 1.1308-1.6554 1.5063-3.7061 1.0377-5.66609-.121-.50602-.2881-.96425-.5337-1.46349-.2685-.54578-.5472-.97424-.9456-1.45355-.187-.22498-.6431-.68157-.8679-.86872-.486-.40467-1.0118-.74521-1.5344-.99377-.8244-.39212-1.654-.61611-2.586-.69827-.1926-.01698-.8207-.02384-1.0241-.0112z',
		evenOdd: true,
	}],
	ic_wrong_icon: [{
		d: 'M3 3h26v26H3V3z',
	}],
	ic_notification: [{
		d: 'M22.958 12.083c0-4.904-2.704-8.309-6.204-9.33a2.417 2.417 0 00-4.507-.002c-3.504 1.017-6.205 4.414-6.205 9.332 0 3.183-.642 4.966-1.83 6.259-.198.216-.736.71-1.1 1.046-.173.159-.307.282-.347.322l-.348.353v4.12h7.356c.249 1.284.945 2.143 2.204 2.911a4.843 4.843 0 005.046 0 4.762 4.762 0 002.159-2.91h7.401v-4.12l-.348-.354a18.988 18.988 0 00-.332-.31c-.363-.335-.912-.84-1.113-1.061-1.19-1.298-1.832-3.084-1.832-6.256zm-6.36 12.1H12.3c.171.318.462.558.937.848a2.426 2.426 0 002.528 0c.36-.22.64-.51.835-.847zm6.409-4.212c.254.277.8.785 1.16 1.117v.68H4.833v-.68c.358-.328.905-.835 1.159-1.11 1.614-1.757 2.466-4.127 2.466-7.895 0-4.567 2.82-7.235 6.042-7.235 3.214 0 6.042 2.682 6.042 7.235 0 3.756.853 6.127 2.465 7.888z',
		evenOdd: true,
	}],
	ic_home: [{
		d: 'M5.889 10l6.001-6.001L17.891 10h-.001v10h-12V10h-.001zM3.89 11.999l-1.477 1.476L1 12.063l9.477-9.477c.78-.78 2.046-.78 2.826 0l9.477 9.477-1.413 1.414-1.477-1.477V20a2 2 0 01-2 2h-12a2 2 0 01-2-2v-8.001z',
		evenOdd: true,
	}],
	ic_list: [{
		d: 'M4 18V5h12v13c0 .35.06.687.17 1H5a1 1 0 01-1-1zm15 3H5a3 3 0 01-3-3V3h16v5h4v10a3 3 0 01-3 3zm-1-11h2v8a1 1 0 11-2 0v-8zm-8-3v4H6V7h4zm4 3V8h-3v2h3zm0 2v2H6v-2h8zm0 5v-2H6v2h8z',
		evenOdd: true,
	}],
	ic_graphics: [{
		d: 'M3.818 2h16.364C21.186 2 22 2.995 22 4.222V19.778C22 21.005 21.186 22 20.182 22H3.818C2.814 22 2 21.005 2 19.778V4.222C2 2.995 2.814 2 3.818 2zM20 11V4H4v7h3.414l2.249 2.248 3.1-7.232L16.5 11H20zM4 13h2.586l3.751 3.752 2.9-6.768L15.5 13H20v7H4v-7z',
		evenOdd: true,
	}],
	ic_adrop: [{
		d: 'M21 14c0-3.707-2.811-7.924-8.342-12.753L12 .672l-.658.575C5.812 6.077 3 10.293 3 14c0 5.25 4.097 9 9 9s9-3.75 9-9zm-9 7c-3.836 0-7-2.897-7-7 0-2.85 2.307-6.434 7-10.663 4.693 4.23 7 7.814 7 10.663 0 4.103-3.164 7-7 7z',
		evenOdd: true,
	}],
	ic_account: [{
		d: 'M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm7.4-5.875a9 9 0 10-14.799 0C5.726 15.638 8.37 15 12 15c3.63 0 6.274.638 7.4 2.125zm-1.435 1.615C17.672 17.687 15.569 17 12 17c-3.57 0-5.672.687-5.965 1.74A8.966 8.966 0 0012 21a8.966 8.966 0 005.965-2.26zM12 15c-2.24 0-4-1.573-4-5 0-2.244 1.58-4 4-4 2.414 0 4 1.922 4 4.2 0 3.28-1.782 4.8-4 4.8zm-2-5c0 2.27.818 3 2 3 1.178 0 2-.702 2-2.8 0-1.25-.784-2.2-2-2.2-1.266 0-2 .816-2 2z',
		evenOdd: true,
	}],
	ic_arrow_right: [{
		d: 'M14.586 12L7.293 4.707l1.414-1.414L17.414 12l-8.707 8.707-1.414-1.414L14.586 12z',
		evenOdd: true,
	}],
	ic_arrow_down: [{
		d: 'M11.254 4.254l.825.825L7 10.16l-5.08-5.08.826-.825L7 8.508l4.254-4.254z',
		evenOdd: true,
	}],
	ic_arrow_up: [{
		d: 'M3.53 12.53l-1.06-1.06L9 4.94l6.53 6.53-1.06 1.06L9 7.06l-5.47 5.47z',
		evenOdd: true,
	}],
	ic_analytics: [{
		d: 'M2.31998 0.115479H21.2398C22.4009 0.115479 23.342 1.05667 23.342 2.21768V16.9331C23.342 18.0941 22.4009 19.0353 21.2398 19.0353H2.31998C1.15896 19.0353 0.217773 18.0941 0.217773 16.9331V2.21768C0.217773 1.05667 1.15896 0.115479 2.31998 0.115479ZM2.32006 2.21774V16.9332H21.2399V2.21774H2.32006ZM6.52442 14.8309H8.62663V8.52429H6.52442V14.8309ZM12.831 14.831H10.7288V4.31992H12.831V14.831ZM14.9334 14.831H17.0356V7.47325H14.9334V14.831Z',
		evenOdd: true,
	}],
	ic_announcements: [{
		d: 'M0.532104 2.47999C0.532104 3.78614 1.56722 4.84499 2.8441 4.84499C4.12099 4.84499 5.1561 3.78614 5.1561 2.47999C5.1561 1.17384 4.12099 0.11499 2.8441 0.11499C1.56722 0.11499 0.532104 1.17384 0.532104 2.47999ZM23.6521 1.29744V3.66244H7.46814V1.29744H23.6521ZM23.6521 10.7575V8.39246H7.46814V10.7575H23.6521ZM23.6521 17.8525V15.4875H7.46814V17.8525H23.6521ZM0.532104 16.67C0.532104 17.9762 1.56722 19.035 2.8441 19.035C4.12099 19.035 5.1561 17.9762 5.1561 16.67C5.1561 15.3639 4.12099 14.305 2.8441 14.305C1.56722 14.305 0.532104 15.3639 0.532104 16.67ZM2.8441 11.94C1.56722 11.94 0.532104 10.8812 0.532104 9.57501C0.532104 8.26886 1.56722 7.21001 2.8441 7.21001C4.12099 7.21001 5.1561 8.26886 5.1561 9.57501C5.1561 10.8812 4.12099 11.94 2.8441 11.94Z',
		evenOdd: true,
	}],
	ic_receipts: [{
		d: 'M14.4216 0.300781H2.18254C1.05597 0.300781 0.1427 1.21853 0.1427 2.35062V20.7992C0.1427 21.9313 1.05597 22.849 2.18254 22.849H14.4216C15.5482 22.849 16.4614 21.9313 16.4614 20.7992V2.35062C16.4614 1.21853 15.5482 0.300781 14.4216 0.300781ZM2.18243 6.45036V2.35064H14.4215V6.45036H2.18243ZM2.18243 8.5002V20.7992H14.4215V8.5002H2.18243ZM6.26222 18.7493H4.22238V16.6994H6.26222V18.7493ZM7.28197 18.7493H9.32181V16.6994H7.28197V18.7493ZM12.3816 18.7494H10.3418V15.6747V14.6497V13.6248H12.3816V14.6497V15.6747V18.7494ZM4.22238 15.6747H6.26222V13.6248H4.22238V15.6747ZM9.32181 15.6747H7.28197V13.6248H9.32181V15.6747ZM6.26222 12.5998H4.22238V10.55H6.26222V12.5998ZM7.28197 12.5998H9.32181V10.55H7.28197V12.5998ZM12.3816 12.5998H10.3418V10.55H12.3816V12.5998Z',
		evenOdd: true,
	}]
};

const tabBarIcons: TabBarIconsDataMap = {
	ic_tabbar_profile: commonIcons.ic_profile,
	ic_tabbar_profile_outline: [{
		d: 'M15.6294 4.00945c-1.4834.07604-2.8737.58159-4.0505 1.47288-.6316.47829-1.1887 1.06735-1.62587 1.71899-.18966.28269-.32406.51453-.47639.82177-.40881.82455-.6379 1.66244-.71745 2.62401-.01743.2109-.01498.8758.00402 1.0899.04207.474.11885.9073.23387 1.3199.29566 1.0606.81156 2.0049 1.55482 2.8459.1351.1529.4693.4846.6247.6202.1489.1298.3774.3137.4881.3928.0426.0305.0775.0575.0777.0602.0001.0027-.0531.0275-.1183.0552-1.1233.4777-2.17145 1.1524-3.09176 1.9901-.29056.2645-.7578.7515-1.00885 1.0516-1.13121 1.352-1.90498 2.919-2.28248 4.6224-.14214.6413-.2351 1.4038-.24052 1.973-.00151.1585-.00052.17.01746.2036.02426.0454.06369.0848.10906.1091l.03563.019H26.8373l.0356-.019c.0454-.0243.0848-.0637.1091-.1091.0179-.0335.019-.0453.0176-.1989-.0027-.2833-.0329-.6777-.0806-1.0521-.1864-1.4629-.6794-2.8758-1.455-4.1695-.8182-1.3647-1.967-2.5641-3.3193-3.4652-.5488-.3657-1.2003-.7173-1.7859-.9639-.0556-.0234-.1002-.045-.0991-.048.0011-.003.0601-.049.1312-.1023.6519-.4887 1.2299-1.1003 1.6788-1.7764.673-1.0132 1.0617-2.1304 1.1656-3.3499.0189-.2222.0259-.7188.0134-.9478-.038-.6909-.1686-1.35474-.39-1.98162-.5697-1.61301-1.6935-2.96475-3.1874-3.83373-1.2067-.70192-2.633-1.04532-4.0419-.9731zm.8532 2.20874c1.201.12277 2.2627.62195 3.098 1.45669.8638.86324 1.3614 1.96121 1.4446 3.18762.0111.1636.0058.5989-.0091.7453-.0328.322-.0851.6084-.1604.8784-.2926 1.0484-.9263 1.9706-1.8153 2.6416-.6342.4787-1.3938.8049-2.1859.9388-1.2439.2101-2.5117-.044-3.5742-.7165-.9465-.599-1.6904-1.5354-2.0462-2.5755-.1927-.5631-.2767-1.1079-.2644-1.7139.0053-.2634.0181-.417.0541-.6505.2403-1.55903 1.2289-2.92028 2.6536-3.65388.6174-.31792 1.2715-.4991 1.9865-.55021.1602-.01146.6607-.00408.8187.01208zm-.0259 12.12731c.9438.0518 1.8136.2317 2.6699.5524 1.7162.6426 3.2033 1.8252 4.2241 3.3591.5254.7896.908 1.6374 1.1451 2.5373.0237.0901.0455.1744.0484.1874l.0053.0237H7.45043l.00532-.0237c.02079-.0925.1008-.3812.14728-.5314.49564-1.6011 1.4703-3.038 2.80037-4.1285 1.0571-.8666 2.3114-1.4772 3.6421-1.773.5141-.1142.9282-.1692 1.5537-.2064.1147-.0068.7166-.0046.8575.0031z',
		evenOdd: true,
	}],
	ic_tabbar_home: commonIcons.ic_home,
	ic_tabbar_list: commonIcons.ic_list,
	ic_tabbar_graphics: commonIcons.ic_graphics,
	ic_tabbar_adrop: commonIcons.ic_adrop,
	ic_tabbar_account: commonIcons.ic_account,
};

export const icons: IconsDataMap = {
	...commonIcons,
	...tabBarIcons,
};
