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
  const search= useRef(null)

  const loaderHtml=!state&&loader?<span className="loader"></span>:null



  /* useEffect(searchFocus,[state]) */

  function searchFocus(){
    search.current.focus()
  }

  function reset(){
    setState('')
    setQuestion('')
    setLoader(false)
    textGen(undefined,setState,"abort")
    searchFocus()
    /* window.location.reload() */
  }
  
  return (
    <>
      <Header state={state} loader={loader} reset={reset}/>
      {/* AI Question Area */}
      <section className={loader||state?'question-area-container':'hidden'} >
        <div className='question-area'>{question}</div>
      </section>
      
      <Search  props={{reset,search,state,loader,setLoader,setQuestion,setState}}/>

      {loaderHtml}
      {/* AI Answer Area */}
      <div className="answer-area trans" aria-live='polite'><ReactMarkdown>{state}</ReactMarkdown></div>
    </>
  )
}

export default App
