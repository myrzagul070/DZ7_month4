
import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Posts from "./component/Posts/Posts";
import OnePost from "./component/OnePost/OnePost";
// import MyHeader from "./component/MyHeader/MyHeader";
import NotFound from "./component/notFound/NotFound";
import Counter from "./component/Counter/Counter";
import MUIcomponent from "./component/MUIcomponent/MUIcomponent";
import Layout from "./component/Layout/Layout";


export const PATHS = {
  counter: '/counter',
  notFound: '*',
  posts: '/posts',
  onePost: ':id',
    mui: '/mui',
    admin: '/admin',
    main: '/main'
}
function App() {

  return (
      <div className="App">

        <Routes>
          <Route path={PATHS.notFound} element={<NotFound/>} />
          <Route path={PATHS.main} element={<h1>MainPage</h1>}/>
          <Route path={PATHS.posts}  >
              <Route index element={<Posts/>}/>
              <Route path={PATHS.onePost} element={<OnePost/>} />
              </Route>
          <Route path={PATHS.counter} element={<Counter/>} />
            <Route path={PATHS.mui} element={<MUIcomponent/>}/>
            <Route path={PATHS.admin} element={<Navigate to={'/main'}/>}/>
            <Route path={'/'} element={<Layout/>}/>
        </Routes>
      </div>
  );
}

export default App;

