document.addEventListener('DOMContentLoaded', function () {
    const teacherSelect = document.getElementById('teacher');
    const courseSelect = document.getElementById('course');
    const assignButton = document.getElementById('assign-button');
    const resultMessage = document.getElementById('result-message');

    // Simulating API data for teachers and courses
    const teachers = [
        { id: 1, name: "Mr. V.V. Nagendra Kumar" },
        { id: 2, name: "Dr. O. Sampath Kumar" },
        { id: 3, name: "Dr. Rajesh" },
        { id: 4, name: "Mr. Sunil" },
    ];

    const courses = [
        { id: 1, name: "Python Programming" },
        { id: 2, name: "Data Structures" },
        { id: 3, name: "Artificial Intelligence" },
        { id: 4, name: "Machine Learning" },
    ];

    // Populate teacher select options dynamically
    function populateTeachers() {
        teachers.forEach(teacher => {
            const option = document.createElement('option');
            option.value = teacher.id;
            option.textContent = teacher.name;
            teacherSelect.appendChild(option);
        });
    }

    // Populate course select options dynamically
    function populateCourses() {
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.id;
            option.textContent = course.name;
            courseSelect.appendChild(option);
        });
    }

    // When Assign button is clicked
    assignButton.addEventListener('click', function () {
        const selectedTeacher = teacherSelect.options[teacherSelect.selectedIndex].text;
        const selectedCourse = courseSelect.options[courseSelect.selectedIndex].text;

        // Display result message
        resultMessage.textContent = Assign ${selectedTeacher} to ${selectedCourse};
    });

    // Call the functions to populate the selects
    populateTeachers();
    populateCourses();
});