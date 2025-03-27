import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock3 } from 'lucide-react';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCaretLeft } from "react-icons/fa";


export default function AllBlogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://api.rss2json.com/v1/api.json", {
          params: {
            rss_url: "",
          },
        });
        const fetchedPosts = response.data.items;

        const parseContent = (content) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(content, "text/html");
          const images = Array.from(doc.querySelectorAll("img")).map((img) => img.src);
          return images;
        };

        const postsWithImages = fetchedPosts.map((post) => {
          const images = parseContent(post.content);
          return {
            ...post,
            images,
            excerpt: post.description.replace(/<\/?[^>]+(>|$)/g, "").trim(),
            readTime: "5 min read",
          };
        });

        setPosts(postsWithImages);
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
        <FaCaretLeft /> Back
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.guid}
            className="bg-gradient-to-br from-red-700 via-gray-800 to-pink-950 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              {post.images.length > 0 ? (
                <img
                  src={post.images[0]}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  No Image Available
                </div>
              )}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-200 text-gray-800 shadow-sm">
                  {post.category || "General"}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-gray-300">
                <Link to={post.link} className="hover:text-gray-400 transition-colors transform hover:scale-105 duration-500"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-400 mb-4 line-clamp-2 flex-1">
                {post.excerpt}
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center text-sm text-gray-400 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {new Date(post.pubDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock3 className="w-4 h-4 mr-1.5" />
                    {post.readTime}
                  </div>
                </div>
                
                <Link
                  to={post.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  Read More
                  <BookOpen className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}