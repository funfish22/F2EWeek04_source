import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { createForm, formShape } from 'rc-form';
import Card from 'components/organisms/Card';
import Button from 'components/atoms/Button';
import List from 'components/atoms/List';

const ListContent = `<li>・請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</li>
<li>・使用ATM轉帳，將依據銀行入帳日，依序進行出貨/排貨。</li>
<li>・每筆訂單所提供的「ATM專屬虛擬帳號」皆不同，若您欲使用本項服務，敬請放心進行匯款作業，安全又便利！</li>
<li>・若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
<li>・若您對取貨或付款的方式有疑問，請詳閱<a href="www">「購買說明」</a>。</li>
<li style="color: #000000">・請確認您已詳閱並瞭解本站<a href="www">「購買說明」</a>內容，訂單完成即表示您已同意其中的各項說明。</li>`

type Props = {
    form: formShape,
    CartArray: array,
    onClick: any
};

type State = {
    yourRadio: string
};

class Form extends React.PureComponent<Props, State> {
    state = {
        yourRadio: '',
        yourSelect: ''
    };

    handleRadio = (e) => {
        this.setState({
            yourRadio: e.target.value,
            yourSelect: e.target.title
        })
    };

    handleMember = () => {
        alert('建置中')
    }

    onSubmit = (e) => {
        const {history} = this.props;
        const {yourSelect} = this.state;
        e.preventDefault();
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
            if (!error) {
                history.push(`/${yourSelect}`)
            } else {
                alert('請選擇付款方式');
            }
        });
    }

    render() {
        const {
            form: {getFieldDecorator},
            CartArray
            } = this.props;

        const {yourRadio} = this.state;
        return(
            <Main action="" onSubmit={this.onSubmit}>
                <CardContainer>
                    {getFieldDecorator('payment', {
                            validateFirst: true,
                            rules: [{
                                required: true
                            }]
                        })(
                            <Card source={CartArray} onChange={this.handleRadio} yourRadio={yourRadio}/>
                        )}
                </CardContainer>
                <ListContainer>
                    <ListBlack ListContent={ListContent}/>
                    <ListImg src="assets/img/icon_notice.svg" alt=""/>
                </ListContainer>
                <ButtonContainer>
                    <Button onClick={this.handleMember}>上一步</Button>
                    <Button theme="primary" type="onSubmit">下一步</Button>
                </ButtonContainer>
            </Main>
        )
    }
};

export default withRouter(createForm()(Form));

const Main = styled.form`
    margin: 55px auto 30px;
    max-width: 825px;
    width: 95%
`;

const CardContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -25px 40px -25px;
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