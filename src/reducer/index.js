import {Types} from '../action'

const initState = {
    CartArray: [
        {
            id: 1,
            select: 'Store',
            img: 'assets/img/icon_store.svg',
            title: '超商取貨 付款',
            content: '24隔日取貨說明',
            isShow: true
        },
        {
            id: 2,
            select: 'Card',
            img: 'assets/img/icon_card.svg',
            title: '信用卡 付款',
            content: 'VISA, Master, JCB, 聯合信用卡',
            isShow: true
        },
        {
            id: 3,
            select: 'LinePay',
            img: 'assets/img/line_pay.svg',
            title: 'LINE Pay 付款',
            content: '使用line point折抵消費',
            isShow: true
        },
        {
            id: 4,
            select: 'UnionPay',
            img: 'assets/img/unionpay.png',
            title: '銀聯卡 付款',
            content: '支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準',
            isShow: false
        },
        {
            id: 5,
            select: 'Atm',
            img: 'assets/img/icon_atm.svg',
            title: 'Web ATM 付款',
            content: '網路銀行ATM操作說明',
            isShow: true
        }
    ],
    optionArray : [
        {
            bankId: 0,
            bankName: '台新銀行'
        },
        {
            bankId: 1,
            bankName: '兆豐銀行'
        },
        {
            bankId: 2,
            bankName: '元大銀行'
        }
    ],
    productArray: [
        {
            id: 0,
            img: 'assets/img/product/00.png',
            title: '皮卡丘',
            price: 200,
            status: false
        },
        {
            id: 1,
            img: 'assets/img/product/01.png',
            title: '妙蛙種子',
            price: 210,
            status: true
        },
        {
            id: 2,
            img: 'assets/img/product/02.png',
            title: '妙蛙草',
            price: 220,
            status: true
        },
        {
            id: 3,
            img: 'assets/img/product/03.png',
            title: '妙蛙花',
            price: 230,
            status: true
        },
        {
            id: 4,
            img: 'assets/img/product/04.png',
            title: '小火龍',
            price: 210,
            status: true
        },
        {
            id: 5,
            img: 'assets/img/product/05.png',
            title: '火恐龍',
            price: 220,
            status: true
        },
        {
            id: 6,
            img: 'assets/img/product/06.png',
            title: '噴火龍',
            price: 230,
            status: true
        },
        {
            id: 7,
            img: 'assets/img/product/07.png',
            title: '傑尼龜',
            price: 210,
            status: true
        },
        {
            id: 8,
            img: 'assets/img/product/08.png',
            title: '卡咪龜',
            price: 220,
            status: true
        },
        {
            id: 9,
            img: 'assets/img/product/09.png',
            title: '水箭龜',
            price: 230,
            status: true
        }
    ],
    step: 1,
    info: false,
    isLogin: false,
    isStep: false
}

const ReducerRoot = (state = initState, action) => {
    switch(action.type){
        case Types.STEP_NUMBER :
            return Object.assign({}, state, {
                step: action.step
            });
        case Types.HIDDEN_NUMBER :
            return Object.assign({}, state, {
                info: action.info
            });
        default :
            return state;
    }
}

export default ReducerRoot