
const getImagen = async() => {

    try{
      const apiKey = "kcyjtZHJEHCVxxNWa2x3xE5qIbGmwGSE"
  
      const peticion = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` );
      const { data } = await peticion.json();
    
      const { url } = data.images.original;
      console.log( data.images.original.url )
    
      const img = document.createElement('img');
      img.src = url;
      document.body.append( img );
      
    }catch ( err ){
      console.log( err ); 
    }
  
  }
  
  
  getImagen();