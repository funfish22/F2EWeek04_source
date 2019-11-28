import * as React from 'react';
import styled from 'styled-components';


type Props = {

};

type State = {
    searchText: string
};

class ToolBar extends React.PureComponent<Props, State> {

    state = {
        searchText: ''
    }

    handleSearch = (e) => {
        e.preventDefault();

        const {search} = this.props;

        this.setState({
            searchText: e.target.value
        })

        search(e.target.value)
    }

    handleCancelSearch = () => {
        const {search} = this.props;

        this.setState({
            searchText: ''
        })

        search('')
    }
    
    render() {
        const {searchText} = this.state;
        
        return(
            <ToolBarRoot>
                <ToolBarTitle>Store</ToolBarTitle>
                <ToolBarSearch>
                    <ToolBarInput type="text" placeholder="搜尋產品" value={searchText} onChange={this.handleSearch}/>
                    <ToolBarButton onClick={this.handleCancelSearch}>X</ToolBarButton>
                </ToolBarSearch>
                <ToolBarCart>
                    <img src="assets/img/icon_cart.svg" alt=""/>
                    <span>(0)</span>
                </ToolBarCart>
            </ToolBarRoot>
        )
    }
}

export default ToolBar;

const ToolBarRoot = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 0;
    border-bottom: 3px solid #000;
`;

const ToolBarTitle = styled.h2`
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const ToolBarSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #4BC9C9;
    border-radius: 4px;
    overflow: hidden;
    width: 400px;
    margin: 0 auto;
`;

const ToolBarInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 5px;
`;

const ToolBarButton = styled.button`
    width: 26px;
    height: 26px;
    border-left: 1px solid #4BC9C9;
`;

const ToolBarCart = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 26px;
    }
    
`;