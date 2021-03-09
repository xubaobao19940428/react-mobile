
/**
 * 这里是例子无状态组件用react Hooks
 * 
 */
import React,{useState,useEffect} from 'react'

const  Test=()=>{
    const [defaultVal,setUserDefault] = useState('add')
    useEffect(()=>{
        setTimeout(()=>{
            setUserDefault('1111')
        },2000)
        
    },[])
        return <div>
            {defaultVal}
        </div>
    
}
export default  Test