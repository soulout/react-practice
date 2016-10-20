export function addNewData() {
    return {
        type: 'ADD_NEW_DATA',
    }
}

export function rmData(key) {
    return {
        type: 'RM_DATA',
        key
    }
}

export function inputChange(text) {
    return {
        type: 'INPUT_CHANGE',
        text
    }
}

export function changeStatus(key) {
    return {
        type: 'CHANGE_STATUS',
        key
    }
}