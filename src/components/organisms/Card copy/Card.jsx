import * as React from 'react';
import styled from 'styled-components'

import Title from '../../atoms/Title'
import Radio from '../../atoms/Radio'

type Props = {
    CartArray?: Array<{
        id: number,
        title: string,
        content: string
    }>
};

type State = {};

class Card extends React.PureComponent<Props, State> {
    render() {
        const {CartArray} = this.props;

        return(
            <CardContainer>
                {CartArray.map((row, index) => (
                    <CardRoot key={row.id}>
                        <CardLabel>
                            <CardInput type="radio" name="card" value={row.title}/>
                            <Radio/>
                            <CardImg>
                                <img src={row.img} alt=""/>
                            </CardImg>
                            <CardText>
                                <Title>{row.title}</Title>
                                <CardContent>{row.content}</CardContent>
                            </CardText>
                        </CardLabel>
                    </CardRoot>
                    ))
                }
            </CardContainer>
        )
    }
}

export default Card;

const CardContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-right: -25px;
    margin-left: -25px;
`;

const CardRoot = styled.li`
    margin: 10px 25px;
    width: calc(50% - 50px);
    position: relative;
    display: flex;
    align-items: center;
`;

const CardLabel = styled.label`
    display: flex;
    align-items: center;
    min-height: 120px;
    padding: 20px 20px 20px 35px;
    width: 100%;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
`;

const CardInput = styled.input`
    display: none;
`;

const CardContent = styled.p`
    font-size: 15px;
    color: #909399;
`;

const CardImg = styled.div`
    max-width: 70px;
    margin: 0 30px;
`;

const CardText = styled.div`
    max-width: 195px;
`;