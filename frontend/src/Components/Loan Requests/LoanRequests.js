import React, { useEffect, useState } from 'react'
import LoanItem from '../LoanItem';

const LoanRequests = () => {
  const [applications, setApplications] = useState([])
  const getData = async () => {
    const response = await fetch('http://localhost:5000/api/application/fetchcurrapp', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ODBhN2ZiNjY1NzYxNzdjMjVkYTMxIn0sImlhdCI6MTY1MzQ4MDA3Mn0.j9Q2yRYZ-3-__sOu5UfGYMGhIHZiTfbI-dZOLdhYz_4'
      },
    });
    const json = await response.json();
    setApplications(json)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="container">
      <h2>Loan Requests</h2>
      <div className="items-container">
        {applications.map((application) => {
          return <LoanItem item={application} key={application._id} check={2} />
        })}
      </div>
    </div>
  )
}

export default LoanRequests