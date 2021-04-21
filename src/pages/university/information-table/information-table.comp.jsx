import React from 'react';
import './information-table.style.css';
import CoursePage from '../courses/courses.comp';
import Categories from '../categories/categories.comp';
import Students from '../students/students.comp';
const InformationPage = () => {
    return (
        
        <div className="information-table-container">
           
            Tabla con notas de los estudiantes por su respectivo curso
            
            <CoursePage coursename="Bases de Datos I"/>
            <Categories/>
            <Students student= {{
                name: "Juan Ma. Castro",
                grade: 4.2,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Diego Fr Osorio",
                grade: 4.9,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Sebas. Betancur",
                grade: 3.2,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "María F. Triviño",
                grade: 2.7,
                gender: "Femenino"
            }}/>
            <CoursePage coursename="Programación IV"/>
            <Categories/>
            <Students student= {{
                name: "Carlos Daniel G",
                grade: 2.8,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Juan Jose Vallej",
                grade: 4.2,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Andres Sanchez",
                grade: 4.9,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Jessica Agudelo",
                grade: 2.6,
                gender: "Femenino"
            }}/>
            <CoursePage coursename="Arquitectura de Software"/>
            <Categories/>
            <Students student= {{
                name: "María F. Triviño",
                grade: 4.3,
                gender: "Femenino"
            }}/>
             <Students student= {{
                name: "Jessica Agudelo",
                grade: 4.3,
                gender: "Femenino"
            }}/>
             <Students student= {{
                name: "Juan Ma. Castro",
                grade: 3.7,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Carlos Daniel G.",
                grade: 3.7,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Juan D Mayorga",
                grade: 2.7,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Juan Jose Vallej",
                grade: 2.7,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Andres Sanchez",
                grade: 3.8,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Sebas. Betancur",
                grade: 3.8,
                gender: "Masculino"
            }}/>
            <CoursePage coursename="Microcontroladores"/>
            <Categories/>
            <Students student= {{
                name: "Andres Sanchez",
                grade: 4.5,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Sebas. Betancur",
                grade: 4.9,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Juan Ma. Castro",
                grade: 4.2,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Carlos Daniel G",
                grade: 4.2,
                gender: "Masculino"
            }}/>
           
        </div>
    );
    
}

export default InformationPage;