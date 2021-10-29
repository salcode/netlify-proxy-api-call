import {
  useEffect,
  useState,
} from 'react';

import BlogPosts from '../BlogPosts';

export default function RemoteApiBlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('/wp-content/uploads/outsidewp/example.json');
      const newBlogPosts = await result.json();
      setBlogPosts(newBlogPosts);
    }

    fetchData();
  }, []);

  return (
    <>
      <h2>Blog Posts</h2>
      <BlogPosts
        posts={blogPosts}
      />
    </>
  );
}
