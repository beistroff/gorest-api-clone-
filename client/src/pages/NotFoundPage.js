import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function NotFoundPage() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/", {  })
        }, 1000)
    }, [])
    return <h1>Not found</h1>
}