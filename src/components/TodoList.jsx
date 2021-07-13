import React, { useState } from 'react'
import './TodoList.css'
import './List.css'
import List from './List'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../slices/todoSlice'

const Todolist = () => {
    const [todoDescription, setTodoDescription] = useState('')

    const list = useSelector(state => state.todo)
    const dispatch = useDispatch()
    console.log(list)
    return (
        <>
            <div className="container_all">
                <div className="container_todo">
                    <h1 id="title">TodoList</h1>
                    <div className="container_form">
                        <label htmlFor="">New Todo</label>
                    </div>
                    <div className="container_form">
                        <input onChange={e => setTodoDescription(e.target.value)} value={todoDescription} type="text" name="" id="" />
                        <Button onClick={() => {
                            dispatch(add(todoDescription));
                            // setTodoDescription("")
                        }}>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="list_container">
                <List list={list}></List>
            </div>
        </>
    )
}

export default Todolist;