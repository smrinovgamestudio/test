import React from 'react';

import Iframe from 'react-iframe';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import persik from '../img/cpabro.png';
import './Persik.css';
//import test from './apps.html';
//import Iframe from './iframe.js';
const osName = platform();

const Persik = props => (

	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={window.open("https://l1l.pw/1v06vv/" , '_system')} data-to="home">

				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Persik
		</PanelHeader>
		
		
		<Iframe url="https://l1l.pw/1v06vv/"
        width="100%"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
	</Panel>
	
        
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
