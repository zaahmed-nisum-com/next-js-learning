import React from 'react'
import { useRouter } from 'next/router'

function Index() {
    const router = useRouter()
    const { review } = router.query
    return (
        <div>
            <p>single vreview {review}</p>
        </div>
    )
}

export default Index
