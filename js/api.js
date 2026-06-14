retrieveFiles() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'File 1', size: '2MB' },
          { id: 2, name: 'File 2', size: '5MB' },
          { id: 3, name: 'File 3', size: '1MB' },
        ]);
      }, 1000);
}
}
//Fake crm API