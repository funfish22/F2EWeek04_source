import * as React from 'react';
import styled from 'styled-components';

import Title from 'components/atoms/Title'

type Props = {
    children?: React.Node
};

type State = {};

class FormBlock extends React.PureComponent<Props, State> {
    render() {
        const {children} = this.props
        
        return(
            <FormBlockRoot>
                <FormTitle>{children}</FormTitle>
                <FormList>
                
                </FormList>
            </FormBlockRoot>
        )
    }
}

export default FormBlock;

const FormBlockRoot = styled.div`
`;

const FormTitle = styled(Title)`
    font-size: 16px;
    color: #000;
    font-weight: bold;
`;

const FormList = styled.div`
    padding-left: 40px;
    
`;