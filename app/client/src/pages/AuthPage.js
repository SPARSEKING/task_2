import React, {useState} from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () =>{
  const message = useMessage()
  const {loading,request, error, clearError} = useHttp()
 const [form, setForm] = useState({
   name: "", password: "", email: ""
 })



 const changeHandler = event =>{
   setForm({...form, [event.target.name]: event.target.value})
 }

const registerHendler = async ()=>{
  try{
     const data = await request('/api/auth/register', 'POST',{...form})
     console.log('Data', data)

  }catch (e){}
}

return(
  <div className='container'>
  <div className='row'>
      <div className='col-md-6 mt-5 mx-auto'>
          <form >
              <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
              <div className='form-group'>
                  <label htmlform='login'>Login</label>
                  <input type='text'
                  className='form-control'
                  name='login'
                  placeholder='Enter Login'
                  onChange={changeHandler}
                  />
              </div>
              <div className='form-group'>
                  <label htmlform='password'>Password</label>
                  <input type='password'
                  className='form-control'
                  name='password'
                  placeholder='Enter Password'
                  onChange={changeHandler}
                  />
              </div>
              <div className='form-group'>
                  <label htmlform='email'>Email address</label>
                  <input type='email'
                  className='form-control'
                  name='email'
                  placeholder='Enter Email'
                  onChange={changeHandler}
                  />
              </div>
              <button type='submit'
              className='btn btn-lg btn-primary btn-block' onClick={registerHendler} disabled={loading}>Sign in</button>
              <button type='submit'
              className='btn btn-lg btn-primary btn-block' onClick={registerHendler} disabled={loading}>Sign up</button>
          </form>
      </div>
  </div>

</div>
)

}