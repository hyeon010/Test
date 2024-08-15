import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const getFilteredData = () => {
        if (search === "") {
            return todos
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()))
    } //검색을 했는데 todo에 있으면 T or F 반환, toLowerCase는 검색했을 때, 대소문자 구분 없이 검색하려고 사용

    const filteredTodos = getFilteredData();

    return (
        <div className="List">
            <h4>Todo List 🌼</h4>
            <input 
                value = {search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요" 
            />
            <div className="todos_wrapper" />
                {filteredTodos.map((todo)=>{
                    return (
                        <TodoItem
                            key={todo.id} 
                            {...todo} 
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                        />
                    )
                })}
            <div/>
        </div>
    )
}

export default List