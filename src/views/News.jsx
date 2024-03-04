import React, { useEffect, useState } from 'react';
import ItemBox from '../views/components/ItemBox';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/news');
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          console.error('Failed to fetch news:', response.status);
        }
      } catch (error) {
        console.error('Error during news fetch:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="news-container">
      {news.map((item) => (
        <ItemBox key={item.id} item={item} />
      ))}
    </div>
  );
};

export default News;
