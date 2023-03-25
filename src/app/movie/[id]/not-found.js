import Link from 'next/link'
import React from 'react'

function MovieNotFound() {
  return (
    <div style={{
        display : "flex" ,
        flexDirection : "column"
        ,justifyContent : "center"
        ,alignItems : "center"
     , height : "100%"
    }}>
        <h1>We couldn't find the movie you looking for!</h1>
        <Link href="/" style={{textDecoration :"underline"}}>Go Home!</Link>
    </div>
  )
}

export default MovieNotFound