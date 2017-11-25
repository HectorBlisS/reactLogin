export function getProductById(id){
	return fetch("https://swapi.co/api/people/" + id + "/")
	.then(r=>r.json())
	.then(r=>{
		return r;
	});
}