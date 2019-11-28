import React from 'react';
import {storiesOf} from '@storybook/react';
import '../../../../reset.css';
import Card from '../Card';

storiesOf('Organisms|Card', module)
    .add('default', () => (
        <div style={{maxWidth: '900px', margin: '0 auto', width: '95%'}}>
            <Card title='超商取貨 付款' content='24隔日取貨說明' img='assets/img/icon_store.svg'/>
        </div>

    ));