import * as React from 'react';
import styled, {css} from 'styled-components';

import {formatCurrency} from 'utils/number'

const productArray = [
    {
        id: 0,
        img: 'assets/img/product/00.png',
        title: '皮卡丘',
        price: 200
    }
]

type Props = {
    source?: array
};

type State = {
};

class ProductBox extends React.PureComponent<Props, State> {
    static defaultProps = {
        source: productArray
    };
    
    render() {
        const {source} = this.props;
        return(
            <>
                {source.map((row, index) => (
                    <ProductBoxRoot key={row.id} status={row.status}>
                        <ProductBoxImg>
                            <img src={row.img} alt=""/>
                        </ProductBoxImg>
                        <ProductBoxTitle>{row.title}</ProductBoxTitle>
                        <ProductBoxFooter>
                            <ProductBoxPrice>$ {formatCurrency(row.price)}</ProductBoxPrice>
                            <ProductBoxIcon>
                                <img src="assets/img/icon_cart.svg" alt=""/>
                            </ProductBoxIcon>
                        </ProductBoxFooter>
                    </ProductBoxRoot>
                ))}
            </>
        )
    }
}

export default ProductBox;

const ProductBoxImg = styled.div`
    padding-bottom: 75%;
    position: relative;

    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 80%;
        max-height: 80%;
    }
`;

const ProductBoxTitle = styled.h3`
    font-size: 20px;
    padding: 10px 0;
    margin-bottom: 5px;
`;

const ProductBoxFooter = styled.div`
    display: flex;
    align-items: center;
`

const ProductBoxPrice = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

const ProductBoxIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ccc;
    padding: 7px;
    margin-left: auto;
`;

const ProductBoxRoot = styled.li`
    width: calc(100% / 4 - 20px);
    padding: 15px;
    margin: 10px;
    box-shadow: 0px 0px 5px rgba(0,0,0,.2);
    list-style: none;
    transition: all .3s;

    &:hover{
        box-shadow: 0px 0px 8px rgba(0,0,0,.2);
    }

    ${props => !props.status && css`
        background-color: #ddd;

        ${ProductBoxTitle}, ${ProductBoxFooter} {
            color: #aaa;
        }
    `}
`;