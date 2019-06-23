import React from 'react';
import PropTypes from 'prop-types';
import './EditEvent.css';
//import { tsPropertySignature } from '@babel/types';

import { 
    isValidNumberInput
    , parsedInputAsNumber
    , isValidName
    , isValidHour
    , isValidMinute 
} from './utils.js';

const EditEvent = props => {
    const isFormValid =
        isValidName(props.name) &&
        isValidHour(props.hour) &&
        isValidMinute(props.minute);
    const isFormEmpty = props.name === "" && props.hour === -1 && props.minute === -1;
    return (
        <div className="edit-event-panel">
            <div className="edit-event-input-row">
                <label htmlFor="name">name</label>
                <input
                    type="text"
                    id="name"
                    name="name" 
                    value={props.name}
                    onChange = {e => props.onInputChange({[e.target.name]: e.target.value})}
                />
            </div>
            <div className="edit-event-input-row">
                <label htmlFor="hour">hour</label>
                <input
                    type="tel"
                    id="hour"
                    name="hour" 
                    value={props.hour === -1 ? "" : props.hour}
                    onPaste={e => e.preventDefault()}                    
                    onKeyPress={e => isValidNumberInput(e)}
                    onChange = {e => props.onInputChange({[e.target.name]: parsedInputAsNumber(e.target.value)})}
                />
            </div>
            <div className="edit-event-input-row">
                <label htmlFor="minute">minute</label>
                <input
                    type="tel"
                    id="minute"
                    name="minute" 
                    value={props.minute === -1 ? "" : props.minute}
                    onPaste={e => e.preventDefault()}                    
                    onKeyPress={e => isValidNumberInput(e)}
                    onChange = {e => props.onInputChange({[e.target.name]: parsedInputAsNumber(e.target.value)})}
                />
            </div>
            <div className="buttons-panel">
                <button disabled = {!isFormValid} onClick={() => props.onSave()}>
                    Ok
                </button>
                <button disabled = {isFormEmpty} onClick={() => props.onCancel()}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

EditEvent.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    onInputChange: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func
}

export default EditEvent;