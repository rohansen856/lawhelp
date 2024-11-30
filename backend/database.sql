CREATE TABLE Articles (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    badges JSON NOT NULL,
    icon VARCHAR(255) NOT NULL
);


INSERT INTO Articles (id, title, description, category, badges, icon) VALUES
(1, 'Property Rights and Ownership', 'Comprehensive guide to property ownership, transfer, and rights.', 'property', '["recent"]', 'Building2'),
(2, 'Criminal Procedure Code', 'Detailed overview of criminal procedures and regulations.', 'criminal', '["urgent"]', 'Gavel'),
(3, 'Civil Rights Protection', 'Understanding civil rights and legal protections.', 'civil', '["pending"]', 'Scale'),
(4, 'Constitutional Amendments', 'Latest constitutional amendments and their implications.', 'constitutional', '["recent", "urgent"]', 'BookOpen'),
(5, 'Business Regulations', 'Current business laws and regulatory requirements.', 'business', '["recent"]', 'Users2');



CREATE TABLE article_details (
    id VARCHAR(255) PRIMARY KEY, -- Unique identifier for the article
    title VARCHAR(255) NOT NULL, -- Title of the article
    short_description TEXT, -- Short description of the article
    content TEXT NOT NULL, -- Full content of the article
    author_name VARCHAR(255) NOT NULL, -- Name of the author
    author_avatar VARCHAR(255), -- URL of the author's avatar
    author_role VARCHAR(255), -- Role of the author
    published_at DATETIME NOT NULL, -- Publication date and time
    reading_time VARCHAR(50), -- Estimated reading time
    categories JSON, -- List of categories (stored as JSON)
    images JSON, -- List of images with URLs and alt text (stored as JSON)
    tags JSON -- List of tags (stored as JSON)
);



INSERT INTO article_details (
    id, title, short_description, content, 
    author_name, author_avatar, author_role, 
    published_at, reading_time, categories, 
    images, tags
) VALUES
(
    '1', 
    'Introduction to Node.js', 
    'Learn the basics of Node.js in this comprehensive guide.', 
    'Node.js is a JavaScript runtime built on Chrome\'s V8 engine...',
    'John Doe', 
    'https://example.com/avatars/john.jpg', 
    'Senior Developer', 
    '2024-01-01 10:00:00', 
    '10 minutes', 
    '["Programming", "JavaScript"]', 
    '[{"url": "https://example.com/images/nodejs.jpg", "alt": "Node.js Logo"}]', 
    '["nodejs", "javascript", "backend"]'
),
(
    '2', 
    'Understanding REST APIs', 
    'A guide to understanding how REST APIs work and how to use them.', 
    'REST APIs are an integral part of modern web development...',
    'Jane Smith', 
    'https://example.com/avatars/jane.jpg', 
    'API Specialist', 
    '2024-01-02 15:30:00', 
    '8 minutes', 
    '["Web Development", "APIs"]', 
    '[{"url": "https://example.com/images/restapi.jpg", "alt": "REST API Illustration"}]', 
    '["rest", "api", "web"]'
),
(
    '3', 
    'Getting Started with React', 
    'This article explains the basics of React and how to get started.', 
    'React is a JavaScript library for building user interfaces...',
    'Alice Johnson', 
    'https://example.com/avatars/alice.jpg', 
    'Frontend Developer', 
    '2024-01-03 09:00:00', 
    '12 minutes', 
    '["Frontend", "React"]', 
    '[{"url": "https://example.com/images/react.jpg", "alt": "React Logo"}]', 
    '["react", "frontend", "javascript"]'
);

