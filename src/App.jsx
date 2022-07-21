//hooks
import { useState, useEffect } from 'react'
//pages
import Home from './pages/Home'
import About from './pages/Aboud'
import Menu from './pages/Menu'
//css
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from './components/loading'
import Social from './pages/Social'

function App() {

    const [ loading, setloading ] = useState(false)
    const [ home, setHome ] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setloading(true)
        }, 2000)
        setTimeout(() => {
            setHome(true)
        }, 2000)
    }, [])

    return (
        <div className="App">
            {!loading && <Loading />}
            {home && <div className=''>
                <Home />
                <About />
                <div className='tables col-12'></div>
                <Menu />
                <Social />
            </div>}
        </div>
    )
}

export default App
