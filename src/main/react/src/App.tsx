
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Php from './pages/php.tsx';
import Kotlin from "./pages/kotlin.tsx";



const App: React.FC = () => {
    return (
        <Router>
            <div>
                <main>
                    <Routes>
                        <Route path="/php" element={<Php />} />
                        <Route path="/kotlin" element={<Kotlin />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};
export default App
