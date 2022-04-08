console.log("hello world");

// const duckPic = document.querySelector(`#duckPick`)
// const amazing = document.querySelector(`#amazing`)


// duckPic.addEventListener(`mouseover`, event => {
// 	event.target.alert('thanks for submiting!')
// })

const catPic = document.querySelector('.catPic')

const alertFun = (event) =>{
	event.preventDefault()
	alert(`you're as cute as this cat`)
}

catPic.addEventListener('mouseover', alertFun)


let submitButton = document.querySelector('#contact');

const submitFun = (event) =>{
	
	alert(`your form was submitted!`)
}


submitButton.addEventListener('submit', submitFun);

