var main = function() {
    "use strict";
    
    var question = [
        "<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit?<br>",
        
        "<br>Cupcake ipsum dolor. Sit amet wafer gummies muffin cupcake sugar plum pie?<br>",
        
        "<br>Drag&eacute;e toffee sugar plum unerdwear.com cupcake souffl&eacute; bear claw wafer chupa chups. Chocolate bar donut gummi bears gummies sweet donut. Ice cream jelly-o jelly-o lemon drops danish?<br>",
    ];
    
    var answer = [
        "<br>Cupcake ipsum dolor sit amet fruitcake brownie marshmallow pudding.<br><br>",
        
        "<br>Topping cupcake halvah cotton candy fruitcake gummi bears dessert. Icing topping cotton candy tootsie roll sweet. Tiramisu souffl&eacute; unerdwear.com dessert tart. Topping brownie bear claw chocolate bar halvah bear claw. Croissant jelly beans jelly-o bonbon.<br><br>",
        
        "<br>Icing dessert cotton candy jelly powder ice cream marshmallow. Danish lemon drops gingerbread tart. Liquorice muffin chupa chups danish lollipop gummies. Jelly beans halvah cotton candy gummies sesame snaps sweet roll tootsie roll dessert sesame snaps.<br><br>",
    ];
    
    
    $(".tabs a span").toArray().forEach(function(element){
        
        //create a click handler for this element
        $(element).on("click", function(){
            
            //temporary variable for jQuery version of element
            var $element = $(element);
            
            // make all the tabs interactive
            $(".tabs span").removeClass("active");
        
            // make the first tab active
            $element.addClass("active");
        
            // empty the main content so we can recreate it
            $("main .content").empty();
            
            if ($element.parent().is(":nth-child(1)")) {
                var content = $("<h2>");
                content.append(question[0]);
                content.append("<br><p class='answer'>"+answer[0]+"</p>");
            
                $("main .content").append(content);

                
            } else if ($element.parent().is(":nth-child(2)")) {
                var content = $("<h2>");
                content.append(question[1]);
                content.append("<br><p class='answer'>"+answer[1]+"</p>");
                $("main .content").append(content);  
                
            } else if ($element.parent().is(":nth-child(3)")) {
                var content = $("<h2>");
                content.append(question[2]);
                content.append("<br><p class='answer'>"+answer[2]+"</p>");
                $("main .content").append(content); 
            } 
            
            
        
            // return false so we don't follow the link
            return false;
        
        });
    
    
        
    });
    
    // Triggers the 1st tab to display the toDo list backwards. This is the
    // default display.
    $(".tabs a:first-child span").trigger("click");
    
    
};

$(document).ready(main);