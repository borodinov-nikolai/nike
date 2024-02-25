import { Navigate } from 'react-router-dom'



const HomePage = () => {

  if(true) {
    return <Navigate to='/auth' replace={true} />
  }
  return (
    <div>HomePage</div>
  )
}

export default HomePage