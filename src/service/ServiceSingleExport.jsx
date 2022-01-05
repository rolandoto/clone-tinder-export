
const fromServiceSingle =(vtn) =>{

    const total = vtn
    const {id,title,image}= total
    return {id,title,image} 

}

const ServiceSingleExport =() =>{
    return fetch(`https://clone-tinder-frontend.herokuapp.com/exports/1`)
    .then(resp => resp.json())
    .then(fromServiceSingle)
}
export default ServiceSingleExport