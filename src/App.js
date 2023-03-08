import logo from './logo.svg';
import './App.css';
import SearchPage from "./Layouts/SearchPage";
import PostDetailsPage from './Layouts/PostDetailsPage';
import PostPage from './Layouts/PostPage';
import SnippetsPage from './Layouts/SnippetsPage';
import MemberPage from './Layouts/MemberPage';
import { Routes, Route } from 'react-router-dom'
import Contact from './Layouts/Contact';
import LoadingBar from './Components/LoadingBar';

function App() {
  return (
    <div className="app-container">
      <LoadingBar/>
      <Routes>
        <Route path='/' element={<PostPage />} />
        <Route path='/posts/:collection' element={<PostPage />} />
        <Route path='/post/:param' element={<PostDetailsPage />} />
        <Route path='/search/:param' element={<SearchPage />} />
        <Route path='/snippets' element={<SnippetsPage />} />
        <Route path='/snippets/:collection' element={<SnippetsPage />} />
        <Route path='/member' element={<MemberPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
