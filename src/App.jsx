import { useState , useRef , useEffect, use} from 'react'
import './App.css'
import Search from './Search'
import Header from './Header'
import ReactMarkdown from "react-markdown"
import {textGen} from './AITextGen'

function App() {

  const [state,setState]=useState('')
  const [loader,setLoader]=useState(false)
  const [question,setQuestion]=useState('')
  console.log(state)
  const abortControllerRef=useRef(null)
  
  function reset(){
    console.log(abortControllerRef.current)
    if(abortControllerRef.current){
      abortControllerRef.current.abort()
    }
    setState('')
    setQuestion('')
    setLoader(false)
  }

  const loaderHtml=loader?<span className="loader"></span>:null

  return (
    <>
      <Header state={state} loader={loader} reset={reset}/>
      {/* AI Question Area */}
      <section className={loader||state?'question-area-container':'hidden'} >
        <div className='question-area'>{question}</div>
      </section>
      
      <Search  props={{abortControllerRef,reset,state,loader,setLoader,setQuestion,setState}}/>

      {loaderHtml}
      {/* AI Answer Area */}
      <div className="answer-area trans" aria-live='polite'><ReactMarkdown>{state}</ReactMarkdown></div>
    </>
  )
}

export default App
