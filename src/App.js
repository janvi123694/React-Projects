import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const {loading, data} = useFetch(); 
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if(loading) return 
    setFollowers(data[page])
  }, [loading, page]) // when loading state changes

  const handlePage = (index) => {
    //setFollowers(data[index])
    setPage(index)
  }
  const nextPage = () => {
    setPage((curPage) => { //cur state
      let nextPage = curPage + 1; 
      if(nextPage > data.length - 1){
        nextPage = 0; 
      }
      return nextPage;
    })
   
  }

  const prevPage = () => {
      setPage((curPage) => {
          let prevPage = curPage - 1;
          if (nextPage < 0) {
              prevPage = data.length - 1;
          }
          return prevPage;
      });
      
  };
  return (
      <main>
          <div className="section-title">
              <h1>{loading ? "loading" : "pagination"}</h1>
              <div className="underline"></div>
          </div>
          <section className="followers">
              {followers.map((item, index) => {
                  if (index == 10) {
                      return null;
                  } else {
                      return <Follower {...item} key={item.id} />;
                  }
              })}
          </section>
          {!loading && (
              <div className="btn-container">
                  <button
                      className="prev-btn"
                      onClick={() => prevPage(page - 1)} // need page as a state
                  >
                      prev{" "}
                  </button>
                  {data.map((item, index) => {
                      return (
                          <button
                              key={index}
                              className={`page-btn ${
                                  index === page ? "active-btn" : ""
                              }`}
                              onClick={() => handlePage(index)}
                          >
                              {index + 1}
                          </button>
                      );
                  })}
                  <button
                      className="next-btn"
                      onClick={() => nextPage(page + 1)}
                  >
                      next
                  </button>
              </div>
          )}
      </main>
  );
}

export default App
