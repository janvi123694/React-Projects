import React from 'react'

const Follower = ({avatar_url, html_url, login}) => {
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} className="card_img" />
      <h4 className='card-title'> {login}</h4>
      <a href={html_url} className="btn"> view github profile</a>
    </article>
  )
}

export default Follower
