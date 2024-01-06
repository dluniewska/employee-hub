import React from "react"

const AppProvider = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
    return <>{children}</>
}

export default AppProvider;