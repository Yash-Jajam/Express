-- Create the Courses table
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(100),
    ClassDate VARCHAR(20),
    ClassTime VARCHAR(50),
    ClassLocation VARCHAR(100),
    Map VARCHAR(255),
    Syllabus VARCHAR(255)
);

-- Insert five random courses
INSERT INTO Courses (CourseID, CourseName, ClassDate, ClassTime, ClassLocation, Map, Syllabus) VALUES
(900, 'Test Course', 'Friday', '12:00 PM - 2:40 PM', 'Testing Hall', NULL, NULL),
(901, 'Introduction to SQL', 'Monday', '10:00 AM - 12:40 PM', 'Room 101', NULL, NULL),
(902, 'Advanced Python Programming', 'Wednesday', '1:00 PM - 3:40 PM', 'Lab 2', NULL, NULL),
(903, 'Data Science Fundamentals', 'Tuesday', '9:00 AM - 11:40 AM', 'Room 205', NULL, NULL),
(904, 'Web Development Basics', 'Thursday', '2:00 PM - 4:40 PM', 'Room 303', NULL, NULL),
(905, 'Network Security', 'Friday', '3:00 PM - 5:40 PM', 'IT Hall', NULL, NULL);
