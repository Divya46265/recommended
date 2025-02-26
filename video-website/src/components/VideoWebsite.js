import React, { useState } from "react";
import "./VideoWebsite.css";

const VideoWebsite = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Educational", "Entertainment", "Technology", "Lifestyle"];
  
  const recommendedVideos = [
    { id: 1, title: "Data Analyst", thumbnail: "https://img.youtube.com/vi/2hGZtf7bxZo/0.jpg", views: "1.2M", duration: "15:30" },
    { id: 2, title: "Funmoji funny", thumbnail: "https://img.youtube.com/vi/w6ne0jcaJWI/0.jpg", views: "456K", duration: "8:45" },
    { id: 3, title: "Weight Loss Food", thumbnail: "https://img.youtube.com/vi/YQp4wOW1ySA/0.jpg", views: "789K", duration: "12:20" },
    { id: 4, title: "JOb or Not", thumbnail: "https://img.youtube.com/vi/UZ6C06hBjmM/0.jpg", views: "567K", duration: "10:15" },
    { id: 5, title: "Cyber Security", thumbnail: "https://img.youtube.com/vi/aZlnam6pZzk/0.jpg", views: "890K", duration: "18:40" },
    { id: 6, title: "Baby 3", thumbnail: "https://img.youtube.com/vi/zqKk__UCURY/0.jpg", views: "2.5M", duration: "5:55" },
    { id: 4, title: "class Leader", thumbnail: "https://img.youtube.com/vi/0iGlyPD4Kdc/0.jpg", views: "950K", duration: "45:15" },
  ];
  
  const videos = [
    { id: 1, title: "Ameerpet Scam", thumbnail: "https://img.youtube.com/vi/9h8jU6yEZd0/0.jpg", category: "Educational", views: "1.4M", duration: "22:10", creator: "TechInsider" },
    { id: 2, title: "Yoga", thumbnail: "https://img.youtube.com/vi/bQcS7Iy_oDA/0.jpg", category: "Lifestyle", views: "780K", duration: "30:45", creator: "YogaLife" },
    { id: 3, title: "Wedding", thumbnail: "https://img.youtube.com/vi/ZL-qbG9fWVU/0.jpg", category: "Entertainment", views: "3.2M", duration: "14:30", creator: "EventsToday" },
    { id: 4, title: "class Leader", thumbnail: "https://img.youtube.com/vi/0iGlyPD4Kdc/0.jpg", category: "comedy", views: "950K", duration: "45:15", creator: "funmoji" },
    { id: 5, title: "Bathukamma", thumbnail: "https://img.youtube.com/vi/1GwBZFQ-1pc/0.jpg", category: "Tradition", views: "420K", duration: "28:30", creator: " Daily updates" },
    { id: 6, title: "Last episode gnaesh Master", thumbnail: "https://img.youtube.com/vi/zYATQ99KWO8/0.jpg", category: "comedy", views: "675K", duration: "35:20", creator: "Funmoji" },
    { id: 7, title: "Arranged Marriage", thumbnail: "https://img.youtube.com/vi/21YAHZEax0Y/0.jpg", category: "photography", views: "560K", duration: "40:10", creator: "Dj photography" },
    { id: 8, title: "SQL", thumbnail: "https://img.youtube.com/vi/4yEIZ9KZ_aQ/0.jpg", category: "Educational", views: "890K", duration: "32:45", creator: "DataScience Hub" }
  ];

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === activeCategory);
  
  const trendingVideos = [...videos].sort(() => 0.5 - Math.random()).slice(0, 3);
  
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <button className="sidebar-button">☰</button>
        <button className="sidebar-button">➕</button>
        <nav className="sidebar-nav">
          <button className="sidebar-button">⭐</button>
          <button className="sidebar-button">📺</button>
          <button className="sidebar-button">📁</button>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <div className="header">
          <h1 className="site-title">NicheFlares</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search videos..." />
            <button>🔍</button>
          </div>
          <div className="user-controls">
            <span className="icon">🔔</span>
            <span className="icon">⚙️</span>
             <img src="https://sl.bing.net/cshP3uR4r6a" alt="Profile" className="w-16 h-16 rounded-full border border-gray-300" />
          </div>
        </div>
        
        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="hero-content">
            <h2>Discover Amazing Videos</h2>
            <p>Watch the latest trending videos from creators around the world</p>
            <button className="primary-button">Explore Now</button>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="category-section">
          <div className="category-filter">
            {categories.map(category => (
              <button 
                key={category} 
                className={`category-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
        
        {/* Trending Now Section */}
        <section className="video-section trending-section">
          <h2 className="section-title">Trending Now 🔥</h2>
          <div className="trending-videos">
            {trendingVideos.map((video) => (
              <div key={video.id} className="trending-video-card">
                <div className="video-thumbnail-container">
                  <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                  <span className="video-duration">{video.duration}</span>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-meta">
                    <span className="video-creator">{video.creator}</span> • 
                    <span className="video-views"> {video.views} views</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Recommended Videos */}
        <section className="video-section">
          <h2 className="section-title">Recommended videos →</h2>
          <div className="recommended-videos">
            {recommendedVideos.map((video) => (
              <div key={video.id} className="recommended-video-card">
                <div className="video-thumbnail-container">
                  <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                  <span className="video-duration">{video.duration}</span>
                </div>
                <div className="video-details">
                  <p className="video-title">{video.title}</p>
                  <p className="video-views">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Videos Section */}
        <section className="video-section">
          <h2 className="section-title">Videos →</h2>
          <div className="videos-grid">
            {filteredVideos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail-container">
                  <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                  <span className="video-duration">{video.duration}</span>
                </div>
                <div className="video-details">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-meta">
                    <span className="video-creator">{video.creator}</span>
                  </p>
                  <p className="video-stats">
                    <span className="video-views">{video.views} views</span>
                    <span className="video-category">{video.category}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Subscribe to our Newsletter</h2>
            <p>Get the latest updates and exclusive content directly to your inbox</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button className="primary-button">Subscribe</button>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-logo">NicheFlares</div>
            <div className="footer-links">
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
            <div className="footer-social">
              <span>🌐</span>
              <span>📱</span>
              <span>📷</span>
              <span>🐦</span>
            </div>
          </div>
          <div className="footer-copyright">
            © 2025 NicheFlares. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default VideoWebsite;