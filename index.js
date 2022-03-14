let search = document.querySelector('input')

search.addEventListener('keyup', searchTasks)

function searchTasks(){
    let searchedWord = search.value.toLowerCase();
    const allTaskWords = document.querySelectorAll('.task_li');
    allTaskWords.forEach(task => {
        if(task.firstChild.value.toLowerCase().indexOf(searchedWord) !== -1){
            task.style.display = "flex";
        }
        else{
            task.style.display = "none";
        }
    })
}