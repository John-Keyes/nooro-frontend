import React, { BaseSyntheticEvent, ReactNode, useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import { useCreateTaskMutation } from 'src/store/tasks/apiSlice';
import TextInput from './textInput';
import Button from '../button';
import Ellipse from '../ellipse';
import Label from './label';


type TasksFormType = {
    children: ReactNode, 
    taskTitle?: string,
    taskColor?: string, 
    isLoading: boolean,
    SubmitHandler: any,
    error: string | null
}
const TasksForm = ({children, taskTitle = "", taskColor, isLoading, SubmitHandler, error} : TasksFormType) => {
    const [color, setColor] = useState<string>(taskColor || "red");
    const [title, setTitle] = useState<string>(taskTitle || "");
    return (
            <form onSubmit={SubmitHandler} className="fit-width space-above">
                <TextInput
                    name="Title"
                    id="task-form-title"
                    placeholder="Ex: Brush Your Teeth"
                    value={title}
                    onChange={(e: BaseSyntheticEvent) => setTitle(e.currentTarget.value)}
                    minLength={3}
                    maxLength={50}
                />
                <div className="fit-width space-above">
                    <Label htmlforname="Color"/>
                </div>
                <div className="flex space-above">
                    <Ellipse id="ellipse-red" group="form-color" color="red" formColor={color} setFormColor={setColor}/>
                    <Ellipse id="ellipse-orange" group="form-color"  color="orange" formColor={color} setFormColor={setColor}/>
                    <Ellipse id="ellipse-yellow" group="form-color" color="yellow" formColor={color} setFormColor={setColor}/>
                    <Ellipse id="ellipse-green" group="form-color" color="green" formColor={color} setFormColor={setColor}/>
                    <Ellipse id="ellipse-blue" group="form-color" color="blue" formColor={color} setFormColor={setColor}/>
                    <Ellipse id="ellipse-indigo" group="form-color" color="indigo" formColor={color} setFormColor={setColor}/>
                    <Ellipse id="ellipse-purple" group="form-color"  color="purple" formColor={color} setFormColor={setColor}/>
                    <Ellipse id="ellipse-pink" group="form-color" color="pink" formColor={color} setFormColor={setColor}/>
                    <Ellipse id="ellipse-brown" group="form-color" color="brown" formColor={color} setFormColor={setColor}/>
                    <input value={color} name="Color" style={{display: "none"}} readOnly/>
                </div>
                <div className="flex sign-button-container fit-width space-above">
                    <Button id="task-form-submit" className="fit-width" type="submit" disabled={isLoading}>
                        {children}
                    </Button>
                </div>
                <span className="feedback">
                    {error && <p>{error}</p>}
                </span>
            </form>
    );
}

export default TasksForm;