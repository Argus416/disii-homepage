const getData = async() => {
    const response = await fetch('./database/students.json');
    const data = await response.json();
    return data;
}

getData()
    .then(data => getStudents(data))
    .catch(err => console.log(err))