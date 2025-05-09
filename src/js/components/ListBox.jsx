
import React from 'react';
import { useState, useEffect} from "react";

//import font awesome x-mark icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const ListBox = () => {

    //input task state
    const [task, setTask] = useState('');
    //task list state array
    const [taskList, setTaskList] = useState([]);
    //reset input form state
    const [formStart, setFormStart] =useState("");

    //exectues when page is lodaded and when TaskList have changes
    useEffect(()=>{
        setFormStart("Añade una nueva tarea")
    },[taskList]);

    //event capture value input on changes.
    const onChangeInput = (e) => {
        setTask(e.target.value);
    }
    
    //event capture key down enter on keyCode 13
    const onKeyDownInput = (e) => {

        if (e.keyCode === 13 && task) {
            setTaskList((prev)=> [...prev, task]
            );
            setTask('');
        }     
    }

    //deletes the task with its index
    const deleteTask = (index) => {
        setTaskList((prev)=> prev.filter((_, i) => i !== index))
    }
    
    return (
   
        <div className="card shadow mt-2 rounded-0" style={{width: `30rem`}}>
            
            <ul className="list-group list-group-flush">

                <input 
                    className="list-group-item fw-light" 
                    type="text"
                    value={task}
                    onChange={onChangeInput} 
                    onKeyDown={onKeyDownInput} 
                    placeholder={formStart}
                />                
                            
            {taskList.map((item, i) =>              
                <li key={i} 
                    className="list-group-item bg-light d-flex 
                               justify-content-between father-btn fw-light"
                >
                <div>{item}</div> 
                    <div 
                        className="show-it" 
                        onClick={()=>deleteTask(i)}
                        ><FontAwesomeIcon icon={faXmark} />
                    </div>
                </li>          
            )}
            </ul>

            <div className="card-footer fw-light textfooter">
                <b className="fw-normal">
                    {taskList.length ? taskList.length : ""}
                </b>
                {!taskList.length ? 'No hay tareas, añadir tareas.' : ' tareas Pendientes'  }
            </div>           
        </div>
        )
    }
