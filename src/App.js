import React from 'react';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import NavHeader from './NavHeader';
import Example3 from './examp3';
import CompA from './PropsDrill-ContAPI/compA';
import Com1 from './PropsValidation/com1';
// import Todolist from './todolist';
import SearchUsers from './HOC/userlist';
import Composition1 from './Composition/comp1';
import Usememo from './Pure Component/usememo';
import A from './HOC/A';
import B from './HOC/B';
// import UsersList from './HOC/userlist';
import UseRef from './Uncontrolled Component/useRef';
import UseReducer from './UseReducer/useReducer';
import User from './Redux/user';
import Book from './Redux/book';
import All from './Redux/all';
import Api1 from './Array-Data-Fetching/api1';
import UseRef2 from './Uncontrolled Component/useRef2';
import UseCallback from './Pure Component/useCallback';
import Lifecycle1 from './LifeCycleMethod/lifecycle1';
import Useparams from './useParams/useparams';
import ErrorBoundary from './ErrorBoundaries/errorbondary';
import CleanUp from './CleanUp';


function App() {
  return (

    <HashRouter>
      <NavHeader />
      {/* <Lifecycle1 favcol={"orange"}/> */}
      <Routes>
        
        <Route exact path="/api/:iid" element={<Api1 />} />
        <Route exact path="/examp3" element={<Example3 />} />
        <Route exact path="/ulist" element={<SearchUsers />} />
        {/* <Route exact path="/tlist" element={<Todolist />} /> */}
        <Route exact path="/" element={<CompA />} />
        <Route exact path="/com1" element={<Com1 />} />
        <Route exact path="/comp1" element={<Composition1 />} />
        <Route exact path="/usememo" element={<Usememo />} />
        <Route exact path="/usecallback" element={<UseCallback />} />
        {/* <Route exact path="/userlist" element={<UsersList />} /> */}
        {/* <Route exact path="/todolist" element={<Todolist />} /> */}
        <Route exact path="/usememo" element={<Usememo />} />
        <Route exact path="/a" element={<A name="On Mouse Click" />} />
        <Route exact path="/B" element={<B name="On Mouse Over" />} />
        {/* <Route exact path="/useref" element={<UseRef />} /> */}
        <Route exact path="/useref" element={<UseRef2 />} />
        <Route exact path="/usereducer" element={<ErrorBoundary><UseReducer /></ErrorBoundary>} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/book" element={<Book />} />
        <Route exact path="/all" element={<All />} />
        <Route exact path="/lifecycle" element={ <Lifecycle1 />} />
        <Route exact path="/useparams/:username" element={<Useparams /> } /> 
        <Route exact path="/cleanup" element={<CleanUp /> } /> 
        {/* <Route exact path="/Register" element={<Register />} /> */}
      </Routes>
    </HashRouter>

  )
}

export default App;
