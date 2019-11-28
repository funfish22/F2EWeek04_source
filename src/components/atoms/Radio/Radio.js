import * as React from 'react';
import styled, {css} from 'styled-components';

type Props = {
    isCurrent?: boolean,
    size?: number
};

type State = {};

class Radio extends React.PureComponent<Props, State> {
    static defaultProps = {
        isCurrent: false,
        size: 24
    };

    render() {
        const {isCurrent, size} = this.props

        return(
            <RadioRoot isCurrent={isCurrent} size={size}/>
        )
    }
}

export default Radio;

const RadioRoot = styled.div`
    ${props => props.size && css`
        min-width: ${props.size}px;
        max-width: ${props.size}px;
        height: ${props.size}px;
    `}
    border: ${props => props.isCurrent ? '1px solid #4BC9C9' : '1px solid #DCDFE6'};
    border-radius: 50%;
    position: relative;

    ${props => props.isCurrent && css`
        background-color: #4BC9C9;
        &:after{
            content: '✔';
            position: absolute;
            color: #fff;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    `}
`;