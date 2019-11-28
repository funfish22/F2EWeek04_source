import React from 'react';
import {storiesOf} from '@storybook/react';
import Radio from '../Radio';

storiesOf('Atoms|Radio', module).add('default', () => (
    <>
        <Radio/>
        <Radio isCurrent="true"/>
    </>
));
