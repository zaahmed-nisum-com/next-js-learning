import React from 'react'
import { useRouter } from 'next/router'

function Index() {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <p>single product {id} </p>
        </div>
    )
}

export default Index
