import React, { useState, useEffect } from 'react'
import Box from './component/Box'

import './assets/app.css'
import Style1 from './assets/app.module.css'
import Style2 from './assets/app2.module.css'

import styled from 'styled-components'
let Style3 = styled.div`color:red`;

// axios 추가
import axios from 'axios';

function App () {
    const [inputData, setInputData] = useState(null);
    // await 를 사용하기 위해 async선언
    async function check() {
      const res = await axios.get('/api/');
      setInputData(res.data.user);
    }
    useEffect(() => {
        check();
    },[])

    const add = async() => {
        const res = await axios.post('/api/add')
    }
    return (
      <>
          <div className={Style1.color}>나는 스타일 1 color</div>
          <Box Style ={Style1}/>
          <div className={Style2.color}>나는 스타일 2 color</div>
          <div className='color'>나는 스타일 app.css</div>
          <div className={Style3}>나는 스타일 컴포넌트 Style3</div>
          <button type='button' onClick={add}>add</button>
          {inputData?inputData.map((item,index)=>(
            <div key={index}>{item.nick + " " + item.password}</div>
           )):false}
      </>
    )
}

export default App;