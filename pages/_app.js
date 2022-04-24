import '../styles/globals.css'
import Layout from '../components/Layout.jsx'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
    return (

        <
        ThemeProvider >
        <
        Layout >
        <
        Component {...pageProps }
        /> <
        /Layout> <
        /ThemeProvider>
    )
}

export default MyApp