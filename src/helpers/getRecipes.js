
const { REACT_APP_ENDPOINT_URL, REACT_APP_API_KEY, REACT_APP_ENDPOINT_URL_DETAIL } = process.env;

//To get recipes
export const getRecipesBySearch = async(search = '', intolerance= '', diet= '', offset = 0) => {
    try {
        //Endpoint
        const url = `${REACT_APP_ENDPOINT_URL}?apiKey=${REACT_APP_API_KEY}&query=${(search) || ''}&intolerances=${(intolerance) || ''}&diet=${(diet) || ''}&number=24&offset=${offset}`;
        
        const resp = await fetch( url );
        const results = await resp.json(); 
        
        return results;

    } catch (error) {
        return ({
          "error": true
         });
    } 
}

//To get info from recipe id
export const getRecipeInfo = async(id) => {
    try {
        //Endpoint
        const url = `${REACT_APP_ENDPOINT_URL_DETAIL}${id}/information?apiKey=${REACT_APP_API_KEY}`

        const resp = await fetch(url);
        const results = await resp.json();

        return results;

    } catch (error) {       
        return ({
            "error": true,
            "message":"Something is wrong! :-("
        });
    }    
}
