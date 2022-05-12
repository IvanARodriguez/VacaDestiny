import React from 'react'

const Home = () => {
  return (
    <div className="d-flex gap-3 bg-dark min-vh-100 min-vw-100 justify-content-center align-items-center">
      <div style={{"max-width": "650px"}} className="row gap-2">
        <a href="/register" className="btn btn-success col-12">Register</a>
        <a href="/login" className="btn btn-primary col-12">Login</a>
      </div>

    </div>
  )
}

export default Home