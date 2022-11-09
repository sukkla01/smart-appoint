import React, { useEffect, useState } from 'react'
import Content_ from '../component/Layout/Content_'
import Hoc from '../component/Layout/Hoc'
import { Camera,ChevronDown } from 'lucide-react';
import axios from 'axios'

const Test = () => {
    useEffect(() => {

        getCid()
    }, [])

    const getCid = async () => {
        try {
            let res = await axios.get(`http://localhost:5000/patient`)
           console.log(res.data)



        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Hoc>
           
                <ChevronDown color="#164E63" size={24} />
           dfdfdffgfgfg
        </Hoc>
    )
}

export default Test