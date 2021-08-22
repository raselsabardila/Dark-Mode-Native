const theme = {
    light: {
        theme: "light",
        class: {
            text: "text-light",
            background: "bg-light"
        }
    },
    dark: {
        theme: "dark",
        class: {
            text: "text-dark",
            background: "bg-dark"
        }
    }
}

const btnToggle = document.getElementsByClassName("btn-toggle")[0]

const initButton = () => {
    const themeNow = window.localStorage.getItem("theme")

    btnToggle.innerHTML = (themeNow === theme.light.theme) ? theme.dark.theme : theme.light.theme
}

const setValueTheme = () => {
    const themeNow = window.localStorage.getItem("theme")

    window.localStorage.setItem("theme", (themeNow === theme.light.theme) ? theme.dark.theme : theme.light.theme)
}

const changeThemeComponents = () => {
    const themeNow = window.localStorage.getItem("theme")
    
    const componentsText = Array.from(document.getElementsByClassName((themeNow === theme.light.theme) ? theme.dark.class.text : theme.light.class.text ))
    const componentsBackground = Array.from(document.getElementsByClassName((themeNow === theme.light.theme) ? theme.light.class.background : theme.dark.class.background ))

    componentsText.forEach(item => {
        if(item.classList.contains(theme.light.class.text)) {
            item.classList.remove(theme.light.class.text)
            item.classList.add(theme.dark.class.text)
        } else {
            item.classList.remove(theme.dark.class.text)
            item.classList.add(theme.light.class.text)
        }
    })

    componentsBackground.forEach(item => {
        if(item.classList.contains(theme.light.class.background)) {
            item.classList.remove(theme.light.class.background)
            item.classList.add(theme.dark.class.background)
        } else {
            item.classList.remove(theme.dark.class.background)
            item.classList.add(theme.light.class.background)
        }
    })
}

const init = () => {
    if(!window.localStorage.getItem("theme")) {
        window.localStorage.setItem("theme", theme.light.theme)

        initButton()
    } else {
        initButton()

        const themeNow = window.localStorage.getItem("theme")

        const componentsText = Array.from(document.getElementsByClassName((themeNow === theme.light.theme) ? theme.light.class.text : theme.dark.class.text ))
        const componentsBackground = Array.from(document.getElementsByClassName((themeNow === theme.light.theme) ? theme.dark.class.background : theme.light.class.background ))
    
        componentsText.forEach(item => {
            if(item.classList.contains(theme.light.class.text)) {
                item.classList.remove(theme.light.class.text)
                item.classList.add(theme.dark.class.text)
            } else {
                item.classList.remove(theme.dark.class.text)
                item.classList.add(theme.light.class.text)
            }
        })
    
        componentsBackground.forEach(item => {
            if(item.classList.contains(theme.light.class.background)) {
                item.classList.remove(theme.light.class.background)
                item.classList.add(theme.dark.class.background)
            } else {
                item.classList.remove(theme.dark.class.background)
                item.classList.add(theme.light.class.background)
            }
        })
    }
}

init()

btnToggle.addEventListener("click", () => {
    changeThemeComponents()
    setValueTheme()
    initButton()
})