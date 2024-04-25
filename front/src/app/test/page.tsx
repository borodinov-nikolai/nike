import axios from 'axios'
import React from 'react'



const page = () => {
  return (
    <main>
      <div style={{ marginTop: '200px' }} className="container">
        <a href="https://accounts.google.com/o/oauth2/auth?scope=email%20profile&prompt=select_account&response_type=code&redirect_uri=http://localhost:5000/api/auth/google&client_id=1027607799493-leqd0k3htg8dljcjtbea14nn26tgil9o.apps.googleusercontent.com">
          Войти через Google
        </a>

      </div>

    </main>
  )
}

export default page