import * as React from 'react';
import styled, {css} from 'styled-components';
import {insert} from 'utils/array';

import List from 'components/atoms/List';

const optionArray = [
    {
        bankId: 0,
        bankName: '台新銀行'
    },
    {
        bankId: 1,
        bankName: '兆豐銀行'
    },
    {
        bankId: 2,
        bankName: '元大銀行'
    }
];

type Props = {
    style?: React.CSSProperties,
    className?: string,
    children?: React.Node,
    option?: array,
    listDesc?: html,
    onChange: Function
};

type State = {
    defaultValue: string,
    isOpen: boolean,
    value: number
};

class FormList extends React.PureComponent<Props, State> {
    static defaultProps = {
        option: optionArray,
        listDesc: null
    }

    state = {
        defaultValue: '請選擇銀行',
        isOpen: false,
        value: ''
    }

    bankArray(option) {
        const optionArray = option.map(row => ({value: row.bankId, text: row.bankName}));
        return insert(optionArray, {value: '', text: '請選擇銀行'});
    };

    openSelect = () => {
        const {isOpen} = this.state;

        this.setState({
            isOpen: !isOpen
        })
    };

    changeSelect = (bankName, bankId) => {
        const {onChange} = this.props;
        this.setState({
            defaultValue: bankName,
            isOpen: false,
            value: bankId
        })

        onChange(bankName);
    };

    handleOk = value => {
        const {onChange} = this.props;

        onChange(value);
    };

    render() {
        const {className, children, option, listDesc, errors} = this.props;

        const {defaultValue, isOpen, value} = this.state;

        return(
            <FormListRoot className={className}>
                <FormTitle>{children}</FormTitle>
                <SelectRoot>
                    <SelectListBlock>
                        <SelectListValue isOpen={isOpen} onClick={this.openSelect} errors={errors !== null}>
                            <SelectListTitle value={value !== ''}>{defaultValue}</SelectListTitle>
                            <SelectListArrow isOpen={isOpen}/>
                            {
                                (errors !== null) && (
                                    <SelectListError src="assets/img/icon_error.svg"/>
                                )
                            }
                        </SelectListValue>
                        {
                            isOpen && (
                                <SelectLists>
                                    {
                                        option.map((row, index) => (
                                            <SelectList key={row.bankId} onClick={() => this.changeSelect(row.bankName, row.bankId)}>{row.bankName}</SelectList>
                                        ))
                                    }
                                </SelectLists>
                            )   
                        }
                    <Error>{errors}</Error>
                    </SelectListBlock>
                    {/* <Select defaultValue={value}>
                        {
                            bankOption.map((row, index) => {
                                return (
                                    <option key={row.value} value={row.value}>{row.text}</option>
                            )})
                        }
                    </Select> */}
                    {
                        listDesc && (
                            <DescList ListContent={listDesc}/>
                        )
                    }
                </SelectRoot>
            </FormListRoot>
        )
    }
}

export default FormList;

const FormListRoot = styled.div`
    display: flex;
    padding-left: 25px;
    position: relative;

    &:before{
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: #4BC9C9;
        top: 0;
        left: 0;
    }
`;

const FormTitle = styled.p`
    color: #606266;
    min-width: 60px;
    margin-right: 15px;
    margin-top: 12px;
`;

const SelectListBlock = styled.div`
    position: relative;
`;

const Error = styled.p`
    color: #FA5555;
    font-size: 12px;
    line-height: 1.5;
    position: absolute;
    top: 100%;
    left: 0;
`;

const SelectListValue = styled.div`
    width: 300px;
    height: 40px;
    font-size: 15px;
    border-radius: 4px;
    padding: 5px 15px;
    border: ${props => props.isOpen ? '1px solid #4BC9C9' : '1px solid #D8DCE6'};
    ${props => props.errors && css`
        border-color: #FA5555;
    `}
    color: #909399;
    display: flex;
    align-items: center;
`;

const SelectListTitle = styled.span`
    ${props => props.value && css`
        color: #000;
    `};
`;

const SelectListArrow = styled.span`
    margin-left: auto;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${props => props.isOpen ? '0 4px 5px 4px' : '5px 4px 0 4px'}
    border-color: ${props => props.isOpen ? 'transparent transparent #909399 transparent' : '#909399 transparent transparent transparent'};
`;

const SelectListError = styled.img`
    margin-left: 5px;
`

const SelectRoot = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    padding-bottom: 18px;
`;

const SelectLists = styled.ul`
    position: absolute;
    right: 0;
    left: 0;
    top: calc(100% + 1px);
    padding: 10px 0;
    max-height: 98px;
    overflow-y: auto;
    background-color: #fff;
    z-index: 1;
`;

const SelectList = styled.li`
    padding: 5px 15px;

    &:hover{
        background-color: #4BC9C9;
        color: #fff;
        cursor: pointer;
    }
`;

const DescList = styled(List)`
    margin-top: 18px;
    width: 100%;
`;