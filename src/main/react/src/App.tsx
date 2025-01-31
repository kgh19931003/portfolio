import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Php from './pages/php.tsx';
import Kotlin from "./pages/kotlin.tsx";
import ReactTable from "./pages/react-table.tsx";
import EditForm from "./pages/edit-form.tsx";

const App: React.FC = () => {

    return (
        <Router>
            <div>
                <main>
                    <Routes>
                        <Route path="/php" element={<Php />} />
                        <Route path="/kotlin" element={<Kotlin />} />
                        <Route path="/react-table" element={<ReactTable />}/>
                        <Route path="/edit" element={<EditForm />} />
                        <Route path="/edit/:id" element={<EditForm />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};
export default App
