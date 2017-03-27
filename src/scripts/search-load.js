$(document).ready(function() {
    var list_saved = document.getElementById("list-saved");
    var url="http://localhost:8089/books-schema.json";
    var ar_list_saved=[];
    var html6;

    $('#list-saved').html("");


    loadJSON(url,function(response) {
            $.each(response.entities, function( key, value ) {
                    	if(key=="saved")
                    	{
                            var saved = response.entities.saved;

                            var html ;
                            html='<ul>';

                            $.each(saved,function(i,val){

                                var label =  saved[i].label;
                                var url  = saved[i].url;

                                html+='<ol><div id="link_'+i+'"><a onmouseover="option_view('+i+')" href="'+url+'" id="option_view_'+i+'" >'+label+'</a><div class="options_'+i+'" id="options_'+i+'"><div class="row" ><div class="col-md-4"><input type="button" class="btn btn-sm btn-danger" name="btn-eliminar_'+i+'" id="btn-eliminar_'+i+'" onClick="eliminar_list('+i+')" value="Eliminar"/></div><div class="col-md-4"><button class="btn btn-sm btn-info" type="submit" name="btn-modificar_'+i+'" id="btn-modificar_'+i+'">Modificar</button></div></div></div></div></div></ol>';

                            });

                             html+='</ul>';

                            $('#list-saved').append(html);
                        }
                        if(key=="categories")
                        {
                            var categories = response.entities.categories;

                            
                            

                            var html2 ;
                            html2='<ul>';

                            $.each(categories,function(i,val){

                                $.each(val,function(j,val1){

                                //alert(val1);
                                //console.log(val1);

                                var label =  val1.label;
                                var id  = val1.id;

                                html2+='<ol><div id="link_category_'+id+'"><a onmouseover="option_view_category('+id+')" href="#" id="option_view_category'+id+'" >'+label+'</a><div class="options_category'+id+'" id="options_category'+id+'"><div class="row" ><div class="col-md-4"><input type="button" class="btn btn-sm btn-danger" name="btn-eliminar_category_'+id+'" id="btn-eliminar_category_'+id+'" onClick="eliminar_category('+id+')" value="Eliminar"/></div><div class="col-md-4"><button class="btn btn-sm btn-info" type="submit" name="btn-modificar_category'+id+'" id="btn-modificar_category'+id+'">Modificar</button></div></div></div></div></div></ol>';

                                });

                            });

                             html2+='</ul>';

                            $('#list-category').append(html2);
                        }
                        if(key=="lang")
                        {
                            var languages = response.entities.lang;

                            var html3 ;
                            html3='<ul>';

                            $.each(languages,function(i,val){

                                $.each(val,function(j,val1){

                                //alert(val1);

                                var label =  val1.label;
                                var id  = val1.id;

                                html3+='<ol><div id="link_lang_'+id+'"><a onmouseover="option_view_lang('+id+')" href="#" id="option_view_lang'+id+'" >'+label+'</a><div class="options_lang_'+id+'" id="options_lang_'+id+'"><div class="row" ><div class="col-md-4"><input type="button" class="btn btn-sm btn-danger" name="btn-eliminar_lang_'+id+'" id="btn-eliminar_lang_'+id+'" onClick="eliminar_lang('+id+')" value="Eliminar"/></div><div class="col-md-4"><button class="btn btn-sm btn-info" type="submit" name="btn-modificar_lang_'+id+'" id="btn-modificar_lang_'+id+'">Modificar</button></div></div></div></div></div></ol>';

                                });

                            });

                             html3+='</ul>';

                            $('#list-languages').append(html3);
                        }


                        if(key=="edition")
                        {
                            var edition = response.entities.edition;

                            var html4 ;
                            html4='<ul>';

                            $.each(edition,function(i,val){

                                $.each(val,function(j,val1){

                                //alert(val1);
                               // console.log(val1);

                                var label =  val1.label;
                                var id  = val1.id;

                                html4+='<ol><div id="link_edition_'+id+'"><a onmouseover="option_view_edition('+id+')" href="#" id="option_view_edition'+id+'" >'+label+'</a><div class="options_edition_'+id+'" id="options_edition_'+id+'"><div class="row" ><div class="col-md-4"><input type="button" class="btn btn-sm btn-danger" name="btn-eliminar_edition_'+id+'" id="btn-eliminar_edition_'+id+'" onClick="eliminar_edition('+id+')" value="Eliminar"/></div><div class="col-md-4"><button class="btn btn-sm btn-info" type="submit" name="btn-modificar_edition_'+id+'" id="btn-modificar_edition_'+id+'">Modificar</button></div></div></div></div></div></ol>';

                                });

                            });

                             html4+='<nr</ul>';

                            $('#list-edition').append(html4);
                        }


        html6="<div class='row'>";            
            $.each(response.data,function(k,val){


                var imagen = response.data[k].image;
                var title = response.data[k].title;
                var teaser = response.data[k].teaser;
                
                //alert(teaser);

                html6+='<div class="col-md-4">';
                html6+= '<br/>';
                html6+='<div><img class="img-thumbnail" src="'+imagen+'" alt="'+title+'"></div>';
                html6+='<div class="caption"><h4>'+title+'</h4></div>';
                html6+='<p class="teaser">'+teaser+'</p>';

                html6+='</div>';
               

            });


                html6+='</div>';

                $('#list-result').html(html6);





            
                               		
    });

})

                        
       
});

  function eliminar_list(id)
    {
        
        $('#link_'+id).css("display","none")

    }




function option_view(id)
{
	
    $('#options_'+id).css("display","block")


    $('#option_view_'+id).mouseover(function(){
        $('#link_'+id).css("display","block")
        $('#options_'+id).css("display","block")
    });

    $('#link_'+id).mouseleave(function(){
        $('#options_'+id).css("display","none")
    })
   
    

        	
}




