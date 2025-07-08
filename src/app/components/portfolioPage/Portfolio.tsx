'use client';
import { useEffect, useState } from 'react';
import Gallery, { Card } from './Gallery';
import ButtonsPanel from './ButtonsPanel';
import Loader from '../shared/Loader';

function Portfolio() {
  const [gallery, setGallery] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/cards');
        const data = await response.json();
        console.log(data, `test`);
        setGallery(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <section className="section portfolio">
      <div className="container">
        <h1 className="--visually-hidden">Portfolio</h1>
        <ButtonsPanel
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        {loading ? (
          <Loader height="50vh" />
        ) : (
          <Gallery cards={gallery} activeFilter={activeFilter} />
        )}
      </div>
    </section>
  );
}

export default Portfolio;
