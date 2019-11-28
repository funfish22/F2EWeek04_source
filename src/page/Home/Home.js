import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import Steps from 'components/atoms/Steps';
import Info from 'components/organisms/Info';
import Form from './Form';

import Product from 'page/Product';
import LinePay from 'page/Deposit/PaymentMethod/CustomPayment/LinePay';
import Atm from 'page/Deposit/PaymentMethod/CustomPayment/Atm';
import Card from 'page/Deposit/PaymentMethod/CustomPayment/Card';
import Store from 'page/Deposit/PaymentMethod/CustomPayment/Store';
import UnionPay from 'page/Deposit/PaymentMethod/CustomPayment/UnionPay';
import Pending from 'page/Deposit/Pending';

import PageNotFound from 'page/PageNotFound'

const stepName = ['確認購物車', '選擇配送付款方式', '確認訂購']

type Props = {};

type State = {
    activeStep: number,
    CartArray: array
};

class Home extends React.PureComponent<Props, State> {
    state = {
        activeStep: 1
    }

    constructor(props) {
        super(props);
        const {stepNumber} = this.props;
        stepNumber(1)
    }

    componentDidUpdate() {
        console.log('123')
    }

    render() {
        const {CartArray, step, info, isStep} = this.props
        console.log('222')
        return(
            <>
                {
                    isStep && (
                        <StepsRoot activeStep={step} stepName={stepName}/>
                    )
                }
                {
                    info && (
                        <Info/>
                    )
                }
                <Switch>
                    <Route path="/" exact component={Product} />
                    <Route path={`/Cart`} exact component={Form}>
                        <Form CartArray={CartArray}/>
                    </Route>
                    <Route path={`/Store`} component={Store} />
                    <Route path={`/Card`} component={Card} />
                    <Route path={`/LinePay`} component={LinePay} />
                    <Route path={`/UnionPay`} component={UnionPay} />
                    <Route path={`/Atm`} component={Atm} />
                    
                    <Route path={`/Pending`} component={Pending} />

                    <Route component={PageNotFound} />
                </Switch>
            </>
        )
    }
};

export default Home;

const StepsRoot = styled(Steps)`
    margin-bottom: -20px;
    position: relative;
`;