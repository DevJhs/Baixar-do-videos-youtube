
  
    
// verificador
function   botao(){

    var  Url=document.getElementById("Ur").value
      
    if( Url === "https://youtu.be/"+Url.slice(17,28)){
        if(Url.length === 28){
            
                    document.getElementById('vrs').innerHTML=" Já esta abaixando cachorro/a !!! "
        return      window.location.href= "http://localhost:3000/?url="+Url 

        }else{erro=" Link toda errado, sabe copia e color não !!! rsrsrs "}
    }else{erro=" Só links do Youtube Bebê !! "}



     if(Url !== "" ){ 
            if(Url.length === 43){
                 if( Url == "https://www.youtube.com/watch?v="+Url.slice(32,43)){                   
            

                             document.getElementById('vrs').innerHTML=" Já esta abaixando cachorro/a !!! "
             return           window.location.href= "http://localhost:3000/?url="+Url
             
                 }
                 else{erro=" Só links do Youtube Bebê !!! "}
                
                }
                   
            else{ erro=" Link toda errado, sabe copia e color não !!! rsrsrs "}

        }else {erro=" Colocar algo ai, cachorro/a !!! " }


      console.log(erro);
      document.getElementById("vrs").innerHTML=erro
      

}    

 /*   var nm=document.getElementById("Nm").value;
    nm === "" ? nm="video" : nm 
    */


    