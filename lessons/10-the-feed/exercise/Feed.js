import React, { useRef, useReducer, useEffect, useState } from "react"
import FeedPost from "app/FeedPost"
import { loadFeedPosts, subscribeToNewFeedPosts } from "app/utils"
// import FeedFinal from './Feed.final'
// export default FeedFinal
export default Feed

function Feed() {
  //need state 
  // const [posts, setPosts ] = useState([fakePost])
  const [posts, setPosts ] = useState([])


  // didmount/first render
  // update
  // unmount 
  // what state do i synchronize this eff with?
  // useEffect(effect) //all state
  // useEffect(effect,[]) //no state


  useEffect(()=> {
    loadFeedPosts(Date.now(), 3).then(posts => {
      //whenever network makes a request, always:
      // clap clap
      setPosts(posts)
    })
  }, [])
  // always think of the dependency array
  return (
    <div className="Feed">
      <div className="Feed_button_wrapper">
        <button className="Feed_new_posts_button icon_button">
          View 3 New Posts
        </button>
      </div>

      {/* <FeedPost post={fakePost} /> */}
      {posts.map(post => (
        <FeedPost key={post.id} post={post} />
      ))}


      <div className="Feed_button_wrapper">
        <button className="Feed_new_posts_button icon_button">View More</button>
      </div>
    </div>
  )
}

// you can delete this
const fakePost = {
  createdAt: Date.now() - 10000,
  date: "2019-03-30",
  message: "Went for a run",
  minutes: 45,
  uid: "0BrC0fB6r2Rb5MNxyQxu5EnYacf2"
}

