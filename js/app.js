const getStudents = data => {
    const studnetsKeys = Object.keys(data);
    const container = document.querySelector('main .content .container');



    for (i = 0; i < studnetsKeys.length; i++) {
        const studentsObject = Object.values(data)[i];
        const studentValues = Object.values(studentsObject);

        const cardStudentTemplate = `
        <a href="${studentValues[2]}" class="card" target="_blank">
        <span style="background-image: url('${studentValues[1]}');"></span>
            <h3>${studentValues[0]}</h3>
        </a>`;
        container.innerHTML += cardStudentTemplate;
    }

}