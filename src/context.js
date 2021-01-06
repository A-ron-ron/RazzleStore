import React from "react"

const Context = React.createContext()

function ContextProvider({children}) {

const Hello = "Hello World, this is Context calling"

    return (
        <Context.Provider value={{
            Hello
        }}>
            {children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}