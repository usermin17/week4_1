function Employee(name, age, department, salary, designation) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
    this.designation = designation;
}

const employees = [
    new Employee('A', 28, 'Engineering', 93000, 'Team Lead'),
    new Employee('B', 25, 'HR', 431200, 'Software Developer'),
    new Employee('C', 23, 'Marketing', 51180,'Software Developer'),
    new Employee('D', 30, 'Engineering', 189000, 'Manager'),
];

function calculateAverageSalary(employees) {
    if (employees.length === 0) return 0;

    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    return totalSalary / employees.length;
}

function findEmployeesByDepartment() {
    const department = document.getElementById('department').value;
    const filteredEmployees = employees.filter(employee => employee.department === department);
    displayOutput(filteredEmployees);
}

function findEmployeesByDesignation() {
    const designation = document.getElementById('designation').value;
    const filteredEmployees = employees.filter(employee => employee.designation === designation);
    displayOutput(filteredEmployees);
}

function increaseSalary() {
    const percentage = parseFloat(document.getElementById('percentage').value);
    employees.forEach(employee => {
        employee.salary *= (1 + percentage / 100);
    });
    displayOutput(employees);
}

function sortEmployeesByAge() {
    const sortedEmployees = employees.slice().sort((a, b) => a.age - b.age);
    displayOutput(sortedEmployees);
}

function displayOutput(employees) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Employee Details:</h2>';
    employees.forEach(employee => {
        outputDiv.innerHTML += `
            <p>Name: ${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Salary: ${employee.salary}</p>
        `;
    });
    outputDiv.innerHTML += `<p>Average Salary: ${calculateAverageSalary(employees)}</p>`;
}
