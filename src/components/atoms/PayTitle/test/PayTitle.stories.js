import React from 'react';
import {storiesOf} from '@storybook/react';
import PayTitle from '../PayTitle';

const PayObject = {
    id: 2,
    select: 'Card',
    img: 'assets/img/icon_card.svg',
    title: '信用卡 付款',
    content: 'VISA, Master, JCB, 聯合信用卡',
    desc: '',
    isShow: true
};

storiesOf('Atoms|PayTitle', module).add('default', () => (
    <>
        <PayTitle source={PayObject}/>
        <PayTitle/>
    </>
));
