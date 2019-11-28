import * as React from 'react';
import styled from 'styled-components';

const PayObject = {
    id: 1,
    img: 'assets/img/line_pay.svg',
    title: 'LINE Pay 付款',
    content: '24隔日取貨說明',
    desc: '將於下一步跳轉至LINE Pay進行付款',
    isShow: true
};

type Props = {
    style?: React.CSSProperties,
    className?: string,
    children?: React.Node,
    source?: array
};

type State = {};

class PayTitle extends React.PureComponent<Props, State> {
    static defaultProps = {
        source: PayObject
    }

    render() {
        const {style, className, source} = this.props
        
        return(
            <>
                <PayTitleRoot style={style} className={className}>
                    <PayImg src={source.img} alt=""/>
                    <PayName>{source.title}</PayName>
                </PayTitleRoot>
                {
                    source.desc && (
                        <PayDesc>{source.desc}</PayDesc>
                    )
                }
            </>
        )
    }
}

export default PayTitle;

const PayTitleRoot = styled.div`
    font-size: 15px;
    margin-bottom: 3px;
    color: #606266;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PayImg = styled.img`
    max-width: 40px;
`;

const PayName = styled.h2`
    font-size: 20px;
    color: #606266;
    margin-left: 8px;
`;

const PayDesc = styled.p`
    color: #909399;
    font-size: 12px;
    text-align: center;
    margin-top: 9px;
`;