import * as React from 'react';
import styled from 'styled-components';

type Props = {
    style?: React.CSSProperties,
    className?: string,
    children?: React.Node,
    theme?: 'default' | 'primary',
    size?: 'default' | 'small',
    type?: 'button' | 'submit'
};

type State = {};

const themeConfig = {
    default: {
        bgColor: 'transparent',
        fontColor: '#5A5E66',
        borderColor: '#DCDFE6'
    },
    primary: {
        bgColor: '#4BC9C9',
        fontColor: '#FFFFFF',
        borderColor: '#4BC9C9'
    }
};

const sizeConfig = {
    default: {
        fontSize: '20px',
        minHeight: '55px',
        minWeight: '155px'
    },
    small: {
        fontSize: '14px',
        minHeight: '30px',
        minWeight: '100px'
    }
};

class Button extends React.PureComponent<Props, State> {
    static defaultProps = {
        theme: 'default',
        size: 'default',
        type: 'button'
    };

    render() {
        const {style, className, children, theme, size, ...buttonProps} = this.props

        const themeProps = theme ? themeConfig[theme] : {};
        const sizeProps = size ? sizeConfig[size]: {};

        return(
            <ButtonRoot {...buttonProps} style={style} className={className} config={{...themeProps, ...sizeProps}}>{children}</ButtonRoot>
        )
    }
}

export default Button;

const ButtonRoot = styled.button`
    border: 1px solid ${props => props.config.borderColor};
    border-radius: 4px;
    min-width: ${props => props.config.minWeight};
    min-height: ${props => props.config.minHeight};
    background-color: ${props => props.config.bgColor};
    color: ${props => props.config.fontColor};
    cursor: pointer;
    font-family: Arial, Helvetica, '微軟正黑體', sans-serif;
    font-size: ${props => props.config.fontSize};

    &:not(:last-of-type){
        margin-right: 20px;
    }
`;