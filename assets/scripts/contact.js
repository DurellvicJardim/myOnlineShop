document.querySelector('#contactform').addEventListener('submit', e => {
    e.preventDefault();
    let form = document.querySelector('#contactform');
    const data = new URLSearchParams();
    for (const p of new FormData(form)){
        data.append(p[0], p[1]);
    }

    fetch('./contact.php', {
        method: 'POST',
        body: data
    })
    .catch(error => console.log(error));

})