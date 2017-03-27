function checkInput(){

    	var valor = $('#search-input').val();

    	if(valor.length > 1)
    	{
    		$("#search-btn").prop( "disabled", false );
    	}else{
    		$("#search-btn").prop( "disabled", true );

    	}

        $('#search-input').focus();
    	


}

function autoComplete(){

    	var valor = $('#search-input').val();
    	var url="http://localhost:8089/books-schema.json";

    		
        $('#search-input').keyup(function(){
           
            
               var ar_list=[];             
                loadJSON(url,function(response) {
                    $.each( response.data, function( key, value ) {

                        ar_list.push(response.data[key].title);
                    }); 
                });
                var searchInput = document.getElementById("search-input");
                new Awesomplete(searchInput,{
                    list: ar_list,
                    minChars: 3,
                    maxItems: 7,                         
                });
   
            $('#search-input').focus();
        });
			

}





function searchForm(){
    // code here

    
}
    
