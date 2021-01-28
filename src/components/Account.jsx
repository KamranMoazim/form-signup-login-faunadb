import React from 'react'


function Account(result) {


    if (result.result.name==="NotFound"){
        return <h1>Please Check your Gmail or Password</h1>
    }

    return (
        <div>
            <div>
                USERNAME : {result.result.data.userName}
                <br/>
                NAME : {result.result.data.name}
                <br/>
                FATHER NAME{result.result.data.fatherName}
                <br/>
                FATHER's NIC : {result.result.data.fatherCNIC}
                <br/>
                CITY : {result.result.data.city}
                <br/>
                AGE : {result.result.data.age}
                <br/>
                GMAIL : {result.result.data.gmail}
                <br/>
                PASSWORD : {result.result.data.password}
                <br/>
                PHONE NUMBER : 0{result.result.data.phone}
                <br/>
            </div>
            <br/>
            
        </div>
    )
}

export default Account
