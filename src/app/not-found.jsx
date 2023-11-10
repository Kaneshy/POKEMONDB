import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
    <section>
        <h1>error: 404</h1>
        <h2>Page not founded</h2>
        <Link href={'/'} >Volver</Link>
    </section>
  )
}

export default notFound