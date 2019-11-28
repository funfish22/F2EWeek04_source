import React from 'react';
import styled from 'styled-components';

import ToolBar from 'components/organisms/ToolBar';
import ProductBox from 'components/organisms/ProductBox'

type Props = {}

type State = {}

class Product extends React.PureComponent<Props, State> {

    state = {
        source: [],
        filterArray: []
    }

    componentDidMount() {
        const {source} = this.props;

        this.setState({
            source: source,
            filterArray: source
        })
    }

    search = (text) => {
        const {filterArray} = this.state

        let _filterArray = [...filterArray];

        _filterArray = _filterArray.filter(o => {
            const matchArray = o.title.match(new RegExp(text, 'gi'));
            console.log('matchArray', matchArray)
            return !!matchArray
        });

        this.setState({
            source: _filterArray
        })
    }

    render() {
        const {source} = this.state;

        return(
            <Main>
                <ToolBar search={this.search}/>
                <ProductBoxRoot>
                    <ProductBox source={source}/>
                </ProductBoxRoot>
            </Main>
        )
    }
}

export default Product;

const Main = styled.main`
    max-width: 1120px;
    margin: 0 auto 30px;
    width: 95%;
`;

const ProductBoxRoot = styled.ul`
    margin: 20px -10px;
    display: flex;
    flex-wrap: wrap;
`;