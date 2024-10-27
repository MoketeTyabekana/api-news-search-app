const apiKey='f16246695ef64c608bd34c91f3ee6bb6';

const blogContainer=document.getElementById('news-content');

async function fetchRandomNews(){
    try{  
        const apiUrl='https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}';

        const response =await fetch (apiUrl);

    }catch(error){
console.error('Error Fetching random news data!', error);
return[];
    }
}