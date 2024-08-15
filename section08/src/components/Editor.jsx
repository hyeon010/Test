import './Editor.css'
import { useState, useRef } from 'react'

const Editor = ({onCreate}) => {

    const [content, setContent] = useState("")
    const contentRef = useRef()

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }


    const onKeydown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }  //엔터를 눌러도 컨텐츠를 추가할 수 있게

    const onSubmit = () => {
        if (content === ""){
            contentRef.current.focus() //만약 컨텐츠 추가를 안하고 버튼을 누르면
            return
        }
        onCreate(content)
        setContent("") //컨텐츠를 추가하고 나면 컨텐츠 검색창 초기화 
    }

    return(
        <div className="Editor">
            <input ref = {contentRef} 
            value = {content} 
            onChange = {onChangeContent}
            onKeyDown={onKeydown} 
            placeholder="새로운 Todo..."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor