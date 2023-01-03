function MakePost(d) {
    let check = d.Content.split('.').pop();

    let img = `<img class="Image" src="${d.Content}">`;

    let video = `
    
    <video class="Video" controls>

        <source src="${d.Content}" type="video/mp4">
        
    </video>

    `

    let content = check == "jpg" || check == "png" ? img : video;

    parent.innerHTML += `

        <div class="Block">

            <p class="DateAndTime">${d.DateAndTime}</p>

            <p class="Caption">${d.Caption}</p>

            <div class="Content">

                ${content}

            </div>

        </div>

        `
}