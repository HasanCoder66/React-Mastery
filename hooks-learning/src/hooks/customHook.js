import react, { useState } from "react"

function useToggle  () {

    const [value, setValue] = useState(false)

    const toggle = () => {
        console.log(value)
        setValue((prev) => !prev)
    }
    return [value, toggle]
}

export default useToggle