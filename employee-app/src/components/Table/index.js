import React from 'react';
import Employee from '../Employee';
import "./style.css"

export default function Table({ data }) {
    const arr = [
        {
            firstName: 'Ryan',
            lastName: 'Borja',
            id: '1',
            role: 'Server',
            department: 'FOH',
            sex: 'male'
        },
        {
            firstName: 'Caleb',
            lastName: 'Vincent',
            id: '2',
            role: 'Host',
            department: 'FOH',
            sex: 'male'
        },
        {
            firstName: 'Eric',
            lastName: 'Scott',
            id: '3',
            role: 'GM',
            department: 'Management',
            sex: 'male'
        },
        {
            firstName: 'Brittany',
            lastName: 'Taylor',
            id: '4',
            role: 'dish',
            department: 'BOH',
            sex: 'female'
        },
        {
            firstName: 'Israel',
            lastName: 'Medina',
            id: '5',
            role: 'cook',
            department: 'BOH',
            sex: 'male'
        },
    ]

    return (
        <div>
            <div className="table">
                <div className="titleBox">
                    <div>Name</div>
                    <div>Role</div>
                    <div>Department</div>
                    <div>Sex</div>
                </div>
                <Employee
                    firstName={arr[0].firstName}
                    lastName={arr[0].lastName}
                    role={arr[0].role}
                    department={arr[0].department}
                    sex={arr[0].sex}
                />
                <Employee
                    firstName={arr[1].firstName}
                    lastName={arr[1].lastName}
                    role={arr[1].role}
                    department={arr[1].department}
                    sex={arr[1].sex}
                />
                <Employee
                    firstName={arr[2].firstName}
                    lastName={arr[2].lastName}
                    role={arr[2].role}
                    department={arr[2].department}
                    sex={arr[2].sex}
                /><Employee
                    firstName={arr[3].firstName}
                    lastName={arr[3].lastName}
                    role={arr[3].role}
                    department={arr[3].department}
                    sex={arr[3].sex}
                /><Employee
                    firstName={arr[4].firstName}
                    lastName={arr[4].lastName}
                    role={arr[4].role}
                    department={arr[4].department}
                    sex={arr[4].sex}
                />
            </div>
        </div>
    )
};
