import React from 'react';
import './EditEvent.css';
//import { tsPropertySignature } from '@babel/types';

const EditEvent = props => {
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
                    value={props.hour}
                    onChange = {e => props.onInputChange({[e.target.name]: e.target.value})}
                />
            </div>
            <div className="edit-event-input-row">
                <label htmlFor="minute">minute</label>
                <input
                    type="tel"
                    id="minute"
                    name="minute" 
                    value={props.minute}
                    onChange = {e => props.onInputChange({[e.target.name]: e.target.value})}
                />
            </div>
            <div className="buttons-panel">
                <button onClick={() => props.onSave()}>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default EditEvent;