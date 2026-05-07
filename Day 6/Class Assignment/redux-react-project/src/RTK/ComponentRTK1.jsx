import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from './Feature/userSlice';
const ComponentRTK1 = () => {
    let data = useSelector(prev => prev)
    console.log(data);
    let dispatch = useDispatch()

  return (
    
    <div>
     <button onClick={()=>{
        dispatch(addUser("This is the Jaipur"))
     }} >addUser</button>
    </div>
  )
}

export default ComponentRTK1
