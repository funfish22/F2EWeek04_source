import * as React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';

class Navbar extends React.Component {
    render() {
        const {isLoading} = this.props;
        return(
            <Header>
                <Logo href="/">購物</Logo>
                <Member>
                    {isLoading ? 
                        <Button size="small" theme="primary">Admin</Button> :
                        <>
                            <Button size="small">登入</Button>
                            <Button size="small" theme="primary">註冊</Button>
                        </>
                    }
                    
                </Member>
            </Header>
        )
    }
}

export default Navbar;

const Header = styled.header`
    padding: 20px;
    display: flex;
`;

const Logo = styled.a`
    background-image: url('assets/img/logo.svg');
    background-size: cover;
    width: 200px;
    height: 40px;
    display: inline-block;
    text-indent: 101%;
    white-space: nowrap;
    overflow: hidden;
`;

const Member = styled.div`
    margin-left: auto;
`;