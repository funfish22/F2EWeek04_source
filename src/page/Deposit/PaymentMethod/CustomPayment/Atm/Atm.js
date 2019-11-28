import React from 'react';
import styled from 'styled-components';
import { createForm } from 'rc-form';
import { HashRouter, BrowserRouter, browserHistory} from 'react-router-dom';

import PayTitle from 'components/atoms/PayTitle';
import Button from 'components/atoms/Button';
import List from 'components/atoms/List';
import FormList from 'components/atoms/FormList';
import RadioLabel from 'components/organisms/RadioLabel'

const PayObject = {
    id: 5,
    select: 'Atm',
    img: 'assets/img/icon_atm.svg',
    title: 'Web ATM 付款',
    content: '網路銀行ATM操作說明',
    desc: '',
    isShow: true
};

// const optionArray = [
//     {
//         bankId: 0,
//         bankName: '台新銀行1'
//     },
//     {
//         bankId: 1,
//         bankName: '兆豐銀行2'
//     },
//     {
//         bankId: 2,
//         bankName: '元大銀行3'
//     }
// ];

const ListDesc = `<li>・請先準備好晶片讀卡機與金融卡，以利作業。</li>
<li>・請選擇您常用的銀行網路ATM，依步驟將金融卡插進讀卡機後進行轉帳。</li>
<li>・使用台新銀行轉帳免費，他行將酌收15元手續費用/筆。</li>`

const ListContent = `<li>・請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</li>
<li>・若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
<li>・若您對取貨或付款的方式有疑問，請詳閱<a href="www">「購買說明」</a>。</li>
<li style="color: #000000">・請確認您已詳閱並瞭解本站<a href="www">「購買說明」</a>內容，訂單完成即表示您已同意其中的各項說明。</li>`

type Props = [];

type State = [];

class Atm extends React.PureComponent<Props, State>{

    state = {
        errors: ''
    }

    constructor(props) {
        super(props);
        const {stepNumber} = this.props;
        console.log('123444')
        stepNumber(2)
    }

    checkIsChecked = (rule, value, callback) => {
        if (value === false) {
            callback("請確認");
        } else {
            callback();
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {history, hiddenInfo} = this.props;
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
            if (!error) {
                hiddenInfo(false)
                history.push(`/Pending`)
            }
        });
    }

    handlePrevious = () => {
        const {history, stepNumber} = this.props;

        stepNumber(1)
        history.push('/');
    }

    render() {
        let errors;
        const {
            form: {getFieldDecorator, getFieldError},
            optionArray
            } = this.props;
        return(
            
            <Main action="" style={{maxWidth: '825px', width: '95%'}} onSubmit={this.onSubmit}>
                <PayTitleBlock source={PayObject}/>
                <FormRow>
                    {
                    getFieldDecorator('Name', {
                        validateFirst: true,
                        rules: [{
                            required: true,
                            message: '請選擇銀行'
                        }]
                    })(
                        <FormList option={optionArray} listDesc={ListDesc} errors={(errors = getFieldError('Name')) ? errors.join(', ') : null}>付款銀行</FormList>
                    )}
                </FormRow>
                <ListContainer>
                    <ListBlack ListContent={ListContent}/>
                    {
                    getFieldDecorator('agree', {
                        validateFirst: true,
                        rules: [{ required: true,
                        message: '請確認' }, {
                            validator: this.checkIsChecked
                        }],
                    })(
                        <RadioLabel size={20} errors={(errors = getFieldError('agree')) ? errors.join(', ') : null}>確認，我已暸解</RadioLabel>
                    )}
                    <ListImg src="assets/img/icon_notice.svg" alt=""/>
                </ListContainer>
                <ButtonContainer>
                    <Button onClick={this.handlePrevious}>上一步</Button>
                    <Button theme="primary" type="onSubmit">下一步</Button>
                </ButtonContainer>
            </Main>
        )
    }
}

export default createForm()(Atm);

const Main = styled.form`
    margin: 55px auto 30px;
`;

const PayTitleBlock = styled(PayTitle)`
    margin-bottom: 45px;
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

const FormRow = styled.div`
    display: flex;
    align-items: center;
`;