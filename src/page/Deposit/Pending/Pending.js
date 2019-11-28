import React from 'react';
import styled from 'styled-components';

import Button from 'components/atoms/Button'

class Pending extends React.Component{


    handleMember = () => {
        alert('建置中')
    }

    constructor(props) {
        super(props);
        const {stepNumber} = this.props;
        stepNumber(3)
    }

    handleHome = () => {
        const {history, stepNumber, hiddenInfo} = this.props;
        stepNumber(1)
        hiddenInfo(true)
        history.push(`/`)
    }

    render() {
        return(
            <Main>
                <MainTitle>付款訂購成功！</MainTitle>
                <MainSubtitle>感謝您的訂購，我們將儘速為您出貨！</MainSubtitle>
                <MainImg src="assets/img/img_complete.svg" alt=""/>

                <ButtonContainer>
                    <Button onClick={this.handleMember}>會員專區</Button>
                    <Button theme="primary" onClick={this.handleHome}>返回首頁</Button>
                </ButtonContainer>
            </Main>
        )
    }
}

export default Pending;

const Main = styled.main`
    margin: 85px auto 30px;
    max-width: 825px;
    width: 95%;
`;

const MainTitle = styled.h2`
    color: #606266;
    font-size: 36px;
    text-align: center;
    margin-bottom: 10px;
`;

const MainSubtitle = styled.p`
    text-align: center;
    color: #606266;
    margin-bottom: 36px;
    letter-spacing: 1.6px;
`;

const MainImg = styled.img`
    margin: 0 auto;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;