import React, { useState } from 'react'
import autito from "../../assets/autito.jpg";
import { Row, Col } from 'react-bootstrap'
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import MyForm from '../../components/elementos/MyForm'
import MyFormRegister from '../../components/elementos/MyFormRegister' 

const ModalHome = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
   
          <div className='shadow-lg text-white' style={{
            minHeight: 350,
            maxHeight: 800,
            maxWidth: 500,
            paddingTop: 40,
            paddingBottom: 20,
            paddingRight: 30,
            paddingLeft: 30,
            borderRadius: 50,
            backgroundColor: 'rgb(140, 10, 0, 0.90)'
          }}
          >
            <h2 className='text-center'>{isLogin ? '' : ''}</h2>
            
            <div className='my-4 px-3'>
              {
                isLogin
                  ? <MyForm />
                  : <MyFormRegister />
              }
            </div>
            <hr />
            <p onClick={() => setIsLogin(!isLogin)} className='text-end'>
              {isLogin ? 'No tengo cuenta, registrarme' : 'Ya tengo cuenta'}
            </p>
          </div>
  )
}

export default ModalHome