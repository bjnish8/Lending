import React from 'react'
import './styles.scss'

const App = ({children}) => {
    return (
        <div className="mainpage">
            {children}
        </div>
    )
}

export default App