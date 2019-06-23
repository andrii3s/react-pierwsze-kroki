import React, { Component } from 'react';
import uniqid from 'uniqid';

import './App.css';
import Countdown from './Countdown';
import EditEvent from './EditEvent';

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                {id: 0, name: "śniadanie", hour: 7, minute: 0},
                {id: 1, name: "obiad", hour: 15, minute: 0},
                {id: 2, name: "kolacja", hour: 19, minute: 0}                
            ],
            editedEvent: {
                id: uniqid(),
                name: "",
                hour: -1,
                minute: -1
            }
        };
        this.handleEditEvent = this.handleEditEvent.bind(this);
        this.handleSaveEvent = this.handleSaveEvent.bind(this);
        this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
        this.handleEditInit = this.handleEditInit.bind(this);
        this.handleEditCancel = this.handleEditCancel.bind(this);
    }

    handleEditEvent(val) {
        this.setState(prevState => {
            return {
                editedEvent: Object.assign(prevState.editedEvent, val)
            }
        })
    };

    handleSaveEvent() {
        this.setState(prevState => {
            const editedEventExists = prevState.events.find(el => el.id === prevState.editedEvent.id);

            let updatedEvent;
            if (editedEventExists) {
                updatedEvent = prevState.events.map(el => {
                    if (el.id === prevState.editedEvent.id) return prevState.editedEvent;
                    else return el;
                })
            } else {
                updatedEvent = [...prevState.events, prevState.editedEvent]
            }


            return {
                events: updatedEvent,
                editedEvent: {
                            id: uniqid(),
                            name: "",
                            hour: -1,
                            minute: -1
                        }
            }
        }
        )
        // this.setState(prevState => ({
        //     events: [...prevState.events, prevState.editedEvent],
        //     editedEvent: {
        //         id: uniqid(),
        //         name: "",
        //         hour: "",
        //         minute: ""
        //     }
        // })
        // )
    };

    handleRemoveEvent(id) {
        this.setState(prevState => ({
            events: prevState.events.filter(el => el.id !== id)
        }))
    }

    handleEditInit(id) {
        this.setState(prevState => ({
            editedEvent: { ...prevState.events.find(el => el.id === id) } // object's copy, not a link to an existance
            //editedEvent: { ...prevState.events[id] } // object's copy, not a link to an existance
        }))
    }

    handleEditCancel() {
        this.setState({
            editedEvent: {
                id: uniqid(),
                name: "",
                hour: -1,
                minute: -1
            }
        })
    }

    render() {
        const events = this.state.events.map(el => {
            return (
                <div>
                <Countdown
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    hour={el.hour}
                    minute={el.minute} 
                    onEdit = {(id) => this.handleEditEvent(id)}
                    onEditinit = {(id) => this.handleEditInit(id)}
                    onRemove = {(id) => this.handleRemoveEvent(id)}
                />
                </div>
            )
        });
        
        return (
            <div className="App">
                {events}
                <EditEvent
                    name = {this.state.editedEvent.name}
                    hour = {this.state.editedEvent.hour}
                    minute = {this.state.editedEvent.minute}
                    onInputChange = {val => this.handleEditEvent(val)}
                    onSave = {() => this.handleSaveEvent()}
                    onCancel = {() => this.handleEditCancel()}
                />
            </div>
        )
    }
}

export default App;