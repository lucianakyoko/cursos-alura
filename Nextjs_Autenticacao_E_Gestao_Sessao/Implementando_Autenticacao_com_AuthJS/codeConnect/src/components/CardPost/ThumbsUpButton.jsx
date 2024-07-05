'use client'

import { IconButton } from "../IconButton"
import { Spinner } from "../Spinner"
import { ThumbsUp } from "../icons/ThumbsUp"

import { useFormStatus } from 'react-dom'

export const ThumbsUpButton = () => {
    const { pending } = useFormStatus()
    const {data: session} = useSession()
    return (
        <IconButton disabled={!session || pending}>
            { pending ? <Spinner /> : <ThumbsUp /> }
        </IconButton>
    )
}