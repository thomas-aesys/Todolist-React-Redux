import React from 'react'
import './List.css'
import { useDispatch } from 'react-redux'
import { del } from '../slices/todoSlice'


const List = ({list}) => {
    // const list = useSelector(state => state.todo)
    const dispatch = useDispatch()

    return (
        <div className="container_all_list">
                    {
                        list.todo.map((elem,index) => {
                            // console.log(elem)
                            return (
                                <div key={index} className="container_todo">
                                    <p id="text">• {elem}</p>
                                    <button className="delete_button" onClick={()=> dispatch(del(index))}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
    )
}

export default List;