const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

async function httpGetAllStudents() {
  const response = await fetch(`${baseApiUrl}/students`);
  return await response.json();
}

async function httpGetStudent({ params }) {
  const response = await fetch(`${baseApiUrl}/${params.studentID}`);
  return await response.json();
}

async function httpUpdateStudent(studentID, name, email) {
  const response = await fetch(`${baseApiUrl}/${studentID}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
    redirect: "follow",
  });
  return await response.json();
}

async function httpDeleteStudent(studentID) {
  const areYouSure = window.confirm("Are you sure to delete?");

  if (areYouSure) {
    const response = await fetch(`${baseApiUrl}/${studentID}`, {
      method: "DELETE",
      redirect: "follow",
    });
    return await response.json();
  }
  return null;
}

async function httpCreateStudent(name, email) {
  const response = await fetch(`${baseApiUrl}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
    redirect: "follow",
  });
  return await response.json();
}

export {
  httpGetAllStudents,
  httpGetStudent,
  httpUpdateStudent,
  httpDeleteStudent,
  httpCreateStudent,
};
