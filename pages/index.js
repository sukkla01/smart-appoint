import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Hoc from '../component/Layout/Hoc'
import styles from '../styles/Home.module.css'
import Appoint from '../component/Appoint/Appoint'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token == null) {
      router.push('/login')
    }
    localStorage.setItem("NavId", 2);
  }, [])
  return (
    <Hoc>
      <Appoint />
    </Hoc>

  )
}
