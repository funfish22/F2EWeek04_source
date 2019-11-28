// @flow
/**
 * Steps
 */
import * as React from 'react';
import styled, {css} from 'styled-components';


type Props = {
    style?: React.CSSProperties,
    className?: string,
    activeStep?: number,
    totalStep?: number,
    stepName?: array
};
type State = {};

class Steps extends React.PureComponent<Props, State> {
    static defaultProps = {
        style: null,
        className: null,
        activeStep: 1,
        totalStep: 3,
        stepName: ['','','']
    };

    render() {
        const {className, totalStep, activeStep, stepName, ...otherProps} = this.props;

        const stepDom = [];
        for (let stepNumber = 1; stepNumber <= totalStep; stepNumber += 1) {
            stepDom.push(
                <Step active={activeStep >= stepNumber} key={`stepNumber-${stepNumber}`}>
                    <Arrow />
                    <StepText active={activeStep >= stepNumber}>
                        <StepNumber active={activeStep >= stepNumber} number={stepNumber} data-number={stepNumber}></StepNumber>
                        {stepName[stepNumber - 1]}
                    </StepText>
                </Step>
            );
        }

        return <StepsRoot className={className} {...otherProps}>{stepDom}</StepsRoot>;
    }
}

export default Steps;

const StepsRoot = styled.ul`
    padding: 16px 0;
    background-color: #F5F7FA;
    border-radius: 4px;
    display: flex;
    max-width: 825px;
    margin: 0 auto;
`;

const Arrow = styled.div`

`;

const StepText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #909399;
    font-size: 15px; 
    ${props => props.active && css`
        color: #4BC9C9 !important;
    `};
`;

const StepNumber = styled.span`
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1.5px solid #909399;
    position: relative;
    ${props => props.active && css`
        border: 1.5px solid #4BC9C9 !important;
    `};

    ${props => props.active && css`
        &:after{
            content: '✔';
            position: absolute;
            color: #4BC9C9 !important;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    `};

    ${props => !props.active && css`
        ${props => props.number && css`
            &:after{
                content: attr(data-number);
                position: absolute;
                color: #909399;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        `}
    `}
`;

const Step = styled.li`
    width: calc(100%/3);
    position: relative;

    &:not(:last-of-type){
        ${Arrow} {
            position: absolute;
            width: 15px;
            height: 15px;
            border-top: 1px solid #C0C4CC;
            border-right: 1px solid #C0C4CC;
            right: 0;
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
        }
    }

    ${props => props.active && css`
        & + ${Step} {
            ${StepText} {
                color: #303133;
            }
            ${StepNumber} {
                border-color: #303133;
                &:after{
                    color: #303133;
                }
            }
        }
    `}
`;