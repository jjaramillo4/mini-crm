
fetchProjects = async () => {
    const response = await fetch('/api/projects');
    const data = await response.json();
    return data;
}

fetchMemos = async () => {
    const response = await fetch('/api/memo');
    const data = await response.json()
    return data
}

fetchCustomers = async () => {
    const response = await fetch('api/customers');
    const data = await response.json();
    return data;
}

const MyPromise = new Promise((resolve, reject) => {
    const success = true;

    if(success) {
        resolve('Promise resolved successfully!');
    } else {
        reject(new Error('Promise rejected!'));
    }
});

MyPromise.then(result)