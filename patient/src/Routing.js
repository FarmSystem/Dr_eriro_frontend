import './Routing.css';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';

const imagePath = './logo.jpg';

function Routing() {
    return (
        <div className="Routing">
            <div className="header">
                <img src={imagePath} alt="" width={50} height={50} />
                <h1>Dr.이리로</h1>
            </div>
            <br></br>
            <Router>
                <nav>
                    <ul>
                        {/* 버튼을 클릭하여 각 페이지로 이동 */}
                        <span><Link to="/">홈페이지</Link></span><br></br><br></br>
                        <span><Link to="/home">환자 관리</Link></span><br></br><br></br>
                        <span><Link to="/features">프로필 관리</Link></span><br></br><br></br>
                        <span><Link to="/Pricing">기타</Link></span>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/features' element={<Features />} />
                    <Route path='/Pricing' element={<Pricing />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Routing;
