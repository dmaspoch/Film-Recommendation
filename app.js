async function getFilms(url, func) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhlNDU5N2I0M2IyMGY2ZjIxNDQ0Y2IwYWQ4ZTAzOCIsInN1YiI6IjY2NmIxYTI5NTk1YjgwZmQ4NzcwYWI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lCzJLS8U3zgnIgjYN5TEBbIHahlEgu--fS4FUNzECyU'
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(response.message);
        }
        const films = await response.json();
        console.log(films);

        if (films.total_results !== 0) {
            for (const film of films.results) {
                func(film);
            }
        }
        else {
            console.log("No films found");
        }
    }
    catch (err) {
        console.error(err);
    }
}
function search(title) {
    location.assign(`${location.origin}/search.html?title=${title}`);
}

function checkScroll(scroller, scrollLength, leftButton, rightButton) {
    const currentScroll = scroller.scrollLeft;
    if (currentScroll === 0) {
        leftButton.setAttribute("disabled", "true");
        rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
        rightButton.setAttribute("disabled", "true");
        leftButton.removeAttribute("disabled");
    } else {
        leftButton.removeAttribute("disabled");
        rightButton.removeAttribute("disabled");
    }
}

function leftScroll(scroller) {
    scroller.scrollBy({
        left: -200,
        behavior: "smooth"
    });
}

function rightScroll(scroller) {
    scroller.scrollBy({
        left: 200,
        behavior: "smooth"
    });
}