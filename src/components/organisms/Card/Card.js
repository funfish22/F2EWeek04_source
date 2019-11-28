import * as React from 'react';
import styled, {css} from 'styled-components'

import Title from 'components/atoms/Title'
import Radio from 'components/atoms/Radio'

const CartArray = [
    {
        id: 1,
        img: 'assets/img/icon_store.svg',
        title: '超商取貨 付款',
        content: '24隔日取貨說明',
        isShow: true
    }
]

type Props = {
    source?: array,
    isCurrent?: boolean,
    yourRadio: string,
    className?: string
};

type State = {
    
};

class Card extends React.Component<Props, State> {
    static defaultProps = {
        source: CartArray,
        isCurrent: false,
        className: undefined
    };

    render() {
        const {source, img, onChange, yourRadio, className} = this.props;
        return(
            <>
                {source.map((row, index) => {
                    const isCurrent = yourRadio === row.select
                    return (
                        <CardRoot key={row.id} className={className}>
                            <CardLabel isCurrent={isCurrent} isShow={row.isShow}>
                                <CardInput type="radio" name="card" value={row.select} title={row.select} disabled={!row.isShow} onChange={onChange}/>
                                <Radio isCurrent={isCurrent}/>
                                <CardImg>
                                    <img src={row.img} alt=""/>
                                </CardImg>
                                <CardText>
                                    <CardTitle>{row.title}</CardTitle>
                                    <CardContent>{row.content}</CardContent>
                                </CardText>
                            </CardLabel>
                        </CardRoot>
                    )
                })}
            </>
        )
    }
}

export default Card;

const CardRoot = styled.li`
    margin: 10px 25px;
    width: calc(50% - 50px);
    position: relative;
    display: flex;
    align-items: center;
`;

const CardInput = styled.input`
    display: none;
`;

const CardTitle = styled(Title)`
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

const CardLabel = styled.label`
    display: flex;
    align-items: center;
    min-height: 120px;
    padding: 20px 20px 20px 35px;
    width: 100%;
    border: ${props => props.isCurrent ? '1px solid #4BC9C9' :  '1px solid #DCDFE6'};
    border-radius: 4px;

    ${props => props.isCurrent && css`
        background-color: #F5F7FA
    `};

    ${props => !props.isShow && css`
        border-color: #DCDFE6

        ${CardContent} {
            color: #DCDFE6;
        }

        ${CardTitle} {
            color: #DCDFE6;
        }
    `};
`;