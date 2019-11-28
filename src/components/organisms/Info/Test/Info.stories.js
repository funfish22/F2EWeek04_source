import React from 'react';
import {storiesOf} from '@storybook/react';
import '../../../../reset.css';
import Info from '../Info';

storiesOf('Organisms|Info', module)
    .add('default', () => (
        <Info/>
    ));