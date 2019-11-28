import React from 'react';
import styled from 'styled-components';
import { createForm } from 'rc-form';

import PayTitle from 'components/atoms/PayTitle';
import Button from 'components/atoms/Button';
import List from 'components/atoms/List';

const PayObject = {
    id: 4,
    select: 'UnionPay',
    img: 'assets/img/unionpay.png',
    title: '銀聯卡 付款',
    content: '支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準',
    desc: '',
    isShow: false
};

const ListContent = `<li>・請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</li>
<li>・若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
<li>・若您對取貨或付款的方式有疑問，請詳閱<a href="www">「購買說明」</a>。</li>
<li style="color: #000000">・請確認您已詳閱並瞭解本站<a href="www">「購買說明」</a>內容，訂單完成即表示您已同意其中的各項說明。</li>`

type Props = [];

type State = [];

class UnionPay extends React.PureComponent<Props, State>{
    render() {
        return(
            <Main action="" style={{maxWidth: '825px', width: '95%'}} onSubmit={this.onSubmit}>
                <PayTitle source={PayObject}/>
                <ListContainer>
                    <ListBlack ListContent={ListContent}/>
                    <ListImg src="assets/img/icon_notice.svg" alt=""/>
                </ListContainer>
                <ButtonContainer>
                    <Button>上一步</Button>
                    <Button theme="primary" type="onSubmit">下一步</Button>
                </ButtonContainer>
            </Main>
        )
    }
}

export default createForm()(UnionPay);

const Main = styled.form`
    margin: 55px auto 30px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ListBlack = styled(List)`
    margin: 40px 0 15px;
`;

const ListContainer = styled.div`
    position: relative;
    margin-bottom: 60px;
`;

const ListImg = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
`;