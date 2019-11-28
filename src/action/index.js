export const Types = {
    STEP_NUMBER: 'number/step_number',
    HIDDEN_NUMBER: 'number/hidden_number'
}

export const stepNumber = (step) => {
    return{
        type: Types.STEP_NUMBER,
        step
    }
}

export const hiddenInfo = (info) => {
    return{
        type: Types.HIDDEN_NUMBER,
        info
    }
}