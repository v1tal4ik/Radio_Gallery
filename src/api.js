import axios from 'axios';



export const getListRadio = ()=>{
    return fetch('/api/v1.0/listRadio',{
        method:'GET'
    })
    .then(result=>result.json())
    .then(result=>result)
    .catch(err=>[]);
 }

export const addNewRadioStation=(obj)=>{
   return axios.post(`/api/v1.0/listRadio`,{obj})
   .then(result=>result.data)
   .catch(err=>"Sorry there was error :(");
}

export const editRadioStationById=(obj)=>{
   let id = obj.id;
   return axios.put(`/api/v1.0/listRadio/${id}`,{obj})
   .then(result=>result.data)
   .catch(err=>'Sorry, there was error:(');
}

export const deleteRadioStation=(id)=>{
   return fetch(`/api/v1.0/listRadio/${id}`,{
      method:"DELETE",
      headers:{
         "Content-type":"application/json; charset=UTF-8"
      }, 
      body:JSON.stringify({id})
   })
   .then(result=>result.json())
   .then(result=>result)
   .catch(err=>err);
}




 export const getFavListRadio = ()=>{
    return fetch('/api/v1.0/listRadio/favourite',{
        method:'GET'
    })
    .then(result=>result.json())
    .then(result=>result)
    .catch(err=>[]);
 }

 export const addToFavourite=(id)=>{
    return axios.put(`/api/v1.0/listRadio/favourite/${id}`,{id})
    .then(result=>result.data)
    .catch(err=>err);
 }

 export const deleteToFavourite=(id)=>{
    return axios.patch(`/api/v1.0/listRadio/favourite/${id}`,{id})
    .then(result=>result.data)
    .catch(err=>err);
 }

















/*
return fetch(`/api/v1.0/listRadio/favourite/${id}`,{
        method:'PUT',
        headers:{
            "Content-type":"text/json; charset=UTF8"
         }
    })*/



























 /*export async function getListRadioByPublic(){
    //console.log('work getListRadioByPublic');
    return fetch('https://api.myjson.com/bins/x6omm')
    .then(result=>result.json())
    .then((result)=>{
        //console.log(result);
        let arr = result.map((item)=>{
            let arrGenres= item.categories.map(genres=>genres.title);
            let obj = {
                id:item.id,
                name:item.name,
                image:item.image.url,
                genres:arrGenres.join(','),
                stream:item.streams[0].stream,
                favourite:false
            };
            return obj;
        });
        return arr;
    })
    .catch(err=>{console.log(err)})
 }*/



 /*http://api.dirble.com/v2/countries/UA/stations?token=d4ab059e62520ee391ef52028a&page=3
 
 https://api.myjson.com/bins/6e6em -ua

 https://api.myjson.com/bins/x6omm- popular
 
 'Sorry, there was an error:('
 */



 