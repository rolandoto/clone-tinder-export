
const fromServiceExport =(vtn) =>{

    const total = vtn
    const {id,title,image}= total
    return {id,title,image} 

}

const ServiceExport =({page}) =>{
    return fetch(`https://clone-tinder-frontend.herokuapp.com/exports/${page}`)
    .then(resp => resp.json())
    .then(fromServiceExport)
}
export default ServiceExport