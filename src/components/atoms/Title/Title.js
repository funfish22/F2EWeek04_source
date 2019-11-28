import * as React from 'react';
import styled from 'styled-components';

type Props = {
    style?: React.CSSProperties,
    className?: string,
    children?: React.Node
};

type State = {};

class Title extends React.PureComponent<Props, State> {
    render() {
        const {style, className, children} = this.props
        
        return(
            <TitleRoot style={style} className={className}>{children}</TitleRoot>
        )
    }
}

export default Title;

const TitleRoot = styled.h2`
    font-size: 15px;
    margin-bottom: 3px;
    color: #606266;
`;