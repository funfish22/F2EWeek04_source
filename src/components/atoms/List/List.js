import * as React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

type Props = {
    ListContent?: html,
    className?: string
};

type State = {};

function List(props: Props, state: State) {
    const {ListContent, className} = props
    return(
        <ListRoot className={className}>
            {ReactHtmlParser(ListContent)}
        </ListRoot>
    )
}

List.defaultProps = {
    ListContent: undefined,
    className: undefined
}

export default List;

const ListRoot = styled.ul`
    font-size: 12px;
    color: #909399;
    letter-spacing: 1.2px;
    line-height: 1.5;

    a{
        color: #4BC9C9;
    }
`;