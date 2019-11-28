import * as React from 'react';
import styled from 'styled-components'

const Message = [
    {
        title: '商品小計',
        coin: 880
    },
    {
        title: '運費',
        coin: 60
    },
    {
        title: '總金額',
        coin: 940
    }
]

type Props = {
    Message?: object;
};

type State = {};

class Info extends React.Component<Props, State> {
    static defaultProps = {
        Message: {}
    };

    render() {
        return(
            <InfoBg>
                <InfoContainer>
                    <InfoTitleRoot>
                        <InfoTitle>訂單明細</InfoTitle>
                        <InfoId>(JC293016)</InfoId>
                    </InfoTitleRoot>
                    <InfoMessage>
                        {
                            Message.map((row,index) => (
                                <InfoMessageList key={row.title}>
                                    <InfoMessageListTitle>{row.title}</InfoMessageListTitle>
                                    <InfoMessageListCoin>NT$ {row.coin}</InfoMessageListCoin>
                                </InfoMessageList>
                            ))
                        }
                    </InfoMessage>
                </InfoContainer>
            </InfoBg>
        )
    }
}

export default Info;

const InfoBg = styled.article`
    min-height: 130px;
    padding-top: 20px;
    background-image: linear-gradient(to right, #8BC1EF, #82D6D6);
    display: flex;
    align-items: center;
    border-radius: 4px;
`;

const InfoContainer = styled.div`
    max-width: 870px;
    width: calc(100% - 30px);
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const InfoTitleRoot = styled.div`
    color: #fff;
    padding-left: 20px;
    border-left: 2px solid #fff;
`;

const InfoTitle = styled.h2`
    font-size: 36px;
    margin-bottom: 3px;
`;

const InfoId = styled.p`
    font-size: 15;
`;

const InfoMessage = styled.ul`
    margin-left: auto;
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
`;

const InfoMessageList = styled.li`
    display: flex;
    align-items: flex-end;

    &:not(:last-of-type) {
        margin-right: 50px;
    }

    &:last-of-type {
        margin-left: 10px;
        p:last-of-type {
            font-size: 24px;
            margin-left: 5px;
        }
    }
`;

const InfoMessageListTitle = styled.p`
    margin-right: 10px;
`;

const InfoMessageListCoin = styled.p`

`;