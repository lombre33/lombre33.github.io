
let rp = require('request-promise')
function main(params) {
    if(params.action =='joke'){
    	const options = {
    	    uri: "http://api.icndb.com/jokes/random",
    	    json:true
    	}
        return rp(options)
        .then(res => {
            return {response : res}
        })
    }
    else if(params.action== 'fact'){
        	const options = {
    	    uri: "https://catfact.ninja/fact",
    	    json:true
    	}
        return rp(options)
        .then(res => {
            return {response : res}
        })
        
    }
}