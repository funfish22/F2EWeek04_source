import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../Button';

storiesOf('Atoms|Button', module).add('default', () => (
    <>
        <Button>上一步</Button>
        <Button theme="primary" type="submit">下一步</Button>
    </>
));
