import * as React from 'react';
import styled from 'styled-components';

import Radio from 'components/atoms/Radio'

type Props = {
    style?: React.CSSProperties,
    className?: string,
    children?: React.Node
};

type State = {};

class RadioLabel extends React.PureComponent<Props, State> {
    state = {
        isCurrent: false
    }

    handleAgree = () => {
        const {isCurrent} = this.state;

        this.setState({
            isCurrent: !isCurrent
        })
    }

    handleCheck = (e) => {
        const {onChange} = this.props;

        onChange(e.target.checked)
    }

    render() {
        const {className, children, errors, size} = this.props
        const {isCurrent} = this.state
        
        return(
            <RadioLabelRoot onChange={this.handleAgree} className={className}>
                <RadioInput type="checkbox" name="agree" onChange={this.handleCheck}/>
                <Radio isCurrent={isCurrent} size={size}/>
                <RadioText>{children}</RadioText>
                <Error>{errors}</Error>
            </RadioLabelRoot>
        )
    }
}

export default RadioLabel;

const RadioLabelRoot = styled.label`
    font-size: 15px;
    color: #606266;
    display: inline-flex;
    align-items: center;
    position: relative;
`;

const RadioInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    &[type=checkbox]:checked + div {
        border: 2px;
    }
`;

const RadioText = styled.p`
    margin-left: 10px;
`;

const Error = styled.p`
    color: #FA5555;
    margin-left: 10px;
`;