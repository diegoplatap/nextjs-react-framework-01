import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'

const ContactPage = () => {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/">Home!</Link>
      </h1>

      <p className={'description'}>
        Get started by editing
        <code className={'code'}>pages/contact/index.js</code>
      </p>
    </MainLayout>
  )
}

export default ContactPage
