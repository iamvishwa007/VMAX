import React from 'react'
import { useState,useEffect } from 'react'

const useTheme = () => {

  const[theme,setTheme]=useState(()=>
    window.localStorage.getItem("theme") ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark" : "light"));

   useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, () => setTheme(theme === "dark" ? "light" : "dark")];
  
}

export default useTheme
