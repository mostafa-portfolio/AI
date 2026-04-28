import { useState } from 'react'
import {textGen} from './AITextGen'


export default function Search({props}){


    function handleSubmit(formData){

        const text= formData.get("text")
        if(text){
            props.setQuestion(text)
            textGen(text,props.setState)
            if(!props.state){
                props.setLoader(true)
            }
            props.search.current.focus()
        }
    }

    return (
        <div className={props.loader||props.state?"bottom":"search-form"}>
            <form action={handleSubmit} id="form">
                <svg onClick={props.reset} id='new-chat'   xmlns="http://www.w3.org/2000/svg"    xmlnsXlink="http://www.w3.org/1999/xlink"    viewBox="0 0 24 24"     preserveAspectRatio="xMidYMid meet"     >    <defs>      <clipPath id="__lottie_element_7">        <rect width="24" height="24" x="0" y="0" />      </clipPath>      <clipPath id="__lottie_element_12">        <path          fill="#FF0000"          clipRule="nonzero"          d="M-12.222-12.222C-12.222-12.222-12.111,12.111-12.111,12.111C-12.111,12.111,12.056,12.056,12.056,12.056C12.056,12.056,12.083,-12.083,12.083,-12.083C12.083,-12.083-12.222,-12.222-12.222,-12.222"          fillOpacity="1"        />      </clipPath>    </defs>    <g clipPath="url(#__lottie_element_7)">      <g        clipPath="url(#__lottie_element_12)"        style={{ display: "block" }}        transform="matrix(1,0,0,1,12,12)"        opacity="1"      >        <g opacity="1" transform="matrix(1,0,0,1,0,0)">          <path            strokeLinecap="square"            strokeLinejoin="miter"            fillOpacity="0"            strokeMiterlimit="4"            stroke="rgb(255,255,255)"            strokeOpacity="1"            strokeWidth="2"            d="M-2,-8C-3.864,-8-4.796,-8-5.531,-7.696C-6.511,-7.29-7.29,-6.511,-7.696,-5.531C-8,-4.796-8,-3.864-8,-2C-8,-2-8,1.6-8,1.6C-8,3.84-8,4.96-7.564,5.816C-7.181,6.569-6.569,7.181-5.816,7.564C-4.96,8-3.84,8-1.6,8C-1.6,8,2,8,2,8C3.864,8,4.796,8,5.531,7.696C6.511,7.29,7.29,6.511,7.696,5.531C8,4.796,8,3.864,8,2"          />        </g>      </g>      <g        style={{ display: "block" }}        transform="matrix(1,0,0,1,14.561,9.439)"        opacity="1"      >        <g          opacity="1"          transform="matrix(1,0.000156,-0.000156,1,-0.00248,0.00993)"        >          <path            strokeLinecap="square"            strokeLinejoin="miter"            fillOpacity="0"            strokeMiterlimit="4"            stroke="rgb(255,255,255)"            strokeOpacity="1"            strokeWidth="2"            d="M4.939,-1.939C4.939,-1.939-2.121,5.121-2.121,5.121C-2.402,5.402-2.784,5.561-3.182,5.561C-3.182,5.561-5.561,5.561-5.561,5.561C-5.561,5.561-5.561,3.182-5.561,3.182C-5.561,2.784-5.402,2.402-5.121,2.121C-5.121,2.121,1.939,-4.939,1.939,-4.939C2.767,-5.767,4.111,-5.767,4.939,-4.939C5.767,-4.111,5.767,-2.767,4.939,-1.939z"          />        </g>      </g>    </g>  </svg>
                <input ref={props.search} type="text" name="text" id="search" placeholder="Ask any thing!" aria-label='Ask any thing!'/>
                <button>Ask</button>
            </form>
        </div>
    )
}
