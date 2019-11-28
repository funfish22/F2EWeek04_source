import React from 'react';
import {storiesOf} from '@storybook/react';
import '../../../../reset.css';
import Card from '../Card';

const CartArray = [
    {
        id: 1,
        img: 'assets/img/icon_store.svg',
        title: '超商取貨 付款',
        content: '24隔日取貨說明',
        isCheck: false
    },
    {
        id: 2,
        img: 'assets/img/icon_card.svg',
        title: '信用卡 付款',
        content: 'VISA, Master, JCB, 聯合信用卡',
        isCheck: false
    },
    {
        id: 3,
        img: 'assets/img/line_pay.svg',
        title: 'LINE Pay 付款',
        content: '使用line point折抵消費',
        isCheck: false
    },
    {
        id: 4,
        img: 'assets/img/unionpay.png',
        title: '銀聯卡 付款',
        content: '支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準',
        isCheck: false
    },
    {
        id: 5,
        img: 'assets/img/icon_atm.svg',
        title: 'Web ATM 付款',
        content: '網路銀行ATM操作說明',
        isCheck: false
    }
]

storiesOf('Organisms|Card', module)
    .add('default', () => (
        <div style={{maxWidth: '900px', margin: '0 auto', width: '95%'}}>
            <Card CartArray={CartArray}/>
        </div>

    ));
