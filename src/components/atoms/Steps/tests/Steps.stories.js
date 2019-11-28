import React from 'react';
import {storiesOf} from '@storybook/react';
import Steps from '../Steps';

const stepName = ['確認購物車', '選擇配送付款方式', '確認訂購']

storiesOf('Atoms|Steps', module).add('default', () => (
    <Steps activeStep={1} stepName={stepName} />
));
