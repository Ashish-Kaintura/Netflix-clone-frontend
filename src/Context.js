import React from "react";
const AppContext=React.createContext();
const AppProvider=({Children})=>{
    return<AppContext.Provider value="ash">
        {Children}
    </AppContext.Provider>;



};
export {AppContext,AppProvider}