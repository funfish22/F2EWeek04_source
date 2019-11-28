import React from 'react';
import styled from 'styled-components'

function PageNotFound() {
    return(
        <Container>Page Not Found</Container>
    )
};

export default PageNotFound;

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: bold;
`