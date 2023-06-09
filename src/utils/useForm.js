import {useState} from 'react';

const useForm = () => {
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState(state => ({...state, [e.target.name]: e.target.value}))
  }
  const resetForm = () => {
    setState({});
  }


  return [state, handleChange, resetForm];
}

export default useForm