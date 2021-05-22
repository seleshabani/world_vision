export const ThemeConfig = {
    color:{
        btns:{
            song:'#7efcfc'
        },
        SectionTitle:'#8dd1d3',
    }
}
export const lightTheme = {
    name:'light',
    body: 'white',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
    ...ThemeConfig
}
export const darkTheme = {
    name:'dark',
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
    ...ThemeConfig
}
