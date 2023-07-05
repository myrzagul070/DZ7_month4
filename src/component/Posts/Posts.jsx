import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import {Outlet} from "react-router-dom";

function Posts() {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');
    return (
        <div>
            {loading && <h1>Loading...</h1>}
                    {data.map((item) => (
                        <p key={item.id}>
                            <Link to={`/posts/${item.id}`}>{item.title}</Link>
                        </p>
                    ))
                    }
                    <Outlet/>
        </div>
    );
}

export default Posts;
