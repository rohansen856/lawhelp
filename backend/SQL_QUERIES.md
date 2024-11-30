```sql
CREATE TABLE Articles (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    badges JSON NOT NULL,
    icon VARCHAR(255) NOT NULL
);
```


```sql
INSERT INTO Articles (id, title, description, category, badges, icon) VALUES
(1, 'Property Rights and Ownership', 'Comprehensive guide to property ownership, transfer, and rights.', 'property', '["recent"]', 'Building2'),
(2, 'Criminal Procedure Code', 'Detailed overview of criminal procedures and regulations.', 'criminal', '["urgent"]', 'Gavel'),
(3, 'Civil Rights Protection', 'Understanding civil rights and legal protections.', 'civil', '["pending"]', 'Scale'),
(4, 'Constitutional Amendments', 'Latest constitutional amendments and their implications.', 'constitutional', '["recent", "urgent"]', 'BookOpen'),
(5, 'Business Regulations', 'Current business laws and regulatory requirements.', 'business', '["recent"]', 'Users2');
```
