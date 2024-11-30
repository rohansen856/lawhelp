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