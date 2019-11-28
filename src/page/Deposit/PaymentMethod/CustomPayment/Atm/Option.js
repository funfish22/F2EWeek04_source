import React from 'react';

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

class Option extends React.Component{

    handleOk = value => {
        const {onChange} = this.props;
        this.setState({
            selectValue: value
        });
        onChange(value);
    };

    render() {
        return(
        <select onChange={e => this.handleOk(e.target.value)}>
            {
                optionArray.map((row, index) => {
                    return (
                        <option key={row.bankId} value={row.bankName}>{row.bankName}</option>
                )})
            }
        </select>
        )
    }
};

export default Option;