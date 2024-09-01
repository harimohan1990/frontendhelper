import React from 'react'

import './SystemDesign.css'
export default function SystemDesign() {
  return (
    <div className='systemdesign__container'>
    <div className='systemdesign__left'>
      <h1>System Design Questions</h1>
      <ul className='systemdesign__list'>
        <li>How would you design a URL shortening service like Bit.ly?</li>
        <li>How do you design a scalable system for storing and querying large amounts of data?</li>
        <li>How would you design a distributed cache system?</li>
        <li>Design a system for a social media feed like Twitter or Facebook.</li>
        <li>How would you design a global CDN (Content Delivery Network)?</li>
        <li>How do you design a recommendation system like Netflix or Amazon?</li>
        <li>How would you design an online book reader system?</li>
        <li>How do you design a payment gateway system?</li>
        <li>How would you design a ride-sharing service like Uber or Lyft?</li>
      </ul>
    </div>
    <div className='systemdesign__right'>
      <h1>Answers</h1>
      <div className='systemdesign__answer'>
        <h2>1. How would you design a URL shortening service like Bit.ly?</h2>
        <p>A URL shortening service like Bit.ly can be designed using a hash function to generate a unique ID for each URL. The service stores the original URL in a database keyed by the generated ID. When a shortened URL is accessed, the service retrieves the original URL from the database and redirects the user. Scalability can be ensured by distributing the database and using a CDN for fast access.</p>
      </div>
      <div className='systemdesign__answer'>
        <h2>2. How do you design a scalable system for storing and querying large amounts of data?</h2>
        <p>To design a scalable system for large data, you can use distributed databases like Cassandra or HBase. Partitioning the data based on key ranges or hashing ensures that data is evenly distributed. A caching layer (like Redis) can be added to improve read performance. Implementing sharding and replication helps with horizontal scaling and fault tolerance.</p>
      </div>
      <div className='systemdesign__answer'>
        <h2>3. How would you design a distributed cache system?</h2>
        <p>A distributed cache system can be designed using technologies like Redis or Memcached. The cache can be partitioned across multiple nodes using consistent hashing to ensure even distribution. Implementing cache replication can improve fault tolerance, and a cache eviction policy like LRU (Least Recently Used) ensures efficient memory usage.</p>
      </div>
      <div className='systemdesign__answer'>
        <h2>4. Design a system for a social media feed like Twitter or Facebook.</h2>
        <p>A social media feed system can be designed using a push-pull model. Users’ feeds can be precomputed and stored in a distributed database for fast retrieval. New posts can be pushed to followers in real-time via WebSockets or long polling. Partitioning the data based on user IDs and using a CDN ensures scalability and fast access.</p>
      </div>
      <div className='systemdesign__answer'>
        <h2>5. How would you design a global CDN (Content Delivery Network)?</h2>
        <p>A global CDN can be designed by deploying cache servers in various geographic locations. Content is cached closer to the users, reducing latency. The system should support DNS-based load balancing to route users to the nearest cache server. Implementing a hierarchical caching strategy helps to optimize storage and bandwidth usage.</p>
      </div>
      <div className='systemdesign__answer'>
        <h2>6. How do you design a recommendation system like Netflix or Amazon?</h2>
        <p>A recommendation system can be designed using collaborative filtering, content-based filtering, or a hybrid approach. The system collects user interaction data and uses machine learning algorithms to generate personalized recommendations. The recommendations can be precomputed and stored in a distributed database for quick access.</p>
      </div>
      <div className='systemdesign__answer'>
        <h2>7. How would you design an online book reader system?</h2>
        <p>An online book reader system can be designed using a distributed storage system to store the book content. Content delivery can be optimized by using a CDN. The system should support features like bookmarking, annotations, and syncing across devices. Implementing a search engine on top of the stored content can enhance user experience.</p>
      </div>
      <div className='systemdesign__answer'>
        <h2>8. How do you design a payment gateway system?</h2>
        <p>A payment gateway system can be designed to securely handle transactions between users and merchants. The system should integrate with various payment processors and banks. It must ensure data encryption, fraud detection, and transaction logging. The architecture should support high availability and compliance with standards like PCI-DSS.</p>
      </div>
      <div className='systemdesign__answer'>
        <h2>9. How would you design a ride-sharing service like Uber or Lyft?</h2>
        <p>A ride-sharing service can be designed with a real-time matching engine that pairs drivers and riders. The system should support geolocation tracking, route optimization, and dynamic pricing. It should scale horizontally to handle peak loads and ensure low-latency communication between clients and servers.</p>
      </div>
    </div>
    </div>
  )
}
