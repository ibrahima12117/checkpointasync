// taches1
function iterateWithAsync(){
    return new promise ((resolve, reject) =>{
        setTimeout(() => {
            const table = [12, 13, 14, 15, 16, 17];resolve(table);
        })
    },3000);
}
async function iterateWithAsync(){
    try {
        const  table = [12, 13, 14, 15,16, 17];
        for (const tables of  table) {
            const table = [12, 13, 14, 15,16, 17];
            console.log(table);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        console.log(table);
    }
    catch(err){
        console.error(err);
    }
}
iterateWithAsync();

//taches 5

const urls = [ 'http://localhost:8080/', 'http://localhost:5000/', 'http://localhost:6000/'];
const allUrls = urls.map(url =>checkedUrls(url));
promise.all (allUrls).then(results => {
    results.forEach(results => {
        console.log(results);
    });

}).catch(error => { 
    console.error(error)
});

async function concurrentRequests(url1, url2) {
    try {
        const [response1, response2] = await Promise.all([
            fetch(url1),
            fetch(url2)
        ]);

        const data1 = await response1.json();
        const data2 = await response2.json();

        const combinedResults = { data1, data2 };
        console.log(combinedResults); 
    } catch (error) {
        console.error('Erreur lors des requêtes:', error);
    }
    console.log(concurrentRequests)
}

