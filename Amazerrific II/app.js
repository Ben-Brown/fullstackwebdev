var main = function (){
    var toDos = ["Finish writing this book",
                 "Take Gracie to the park",
                 "Answer emails",
                 "Prep for Monday's class",
                 "Make up some new ToDos",
                 "Get Groceries"];
    
    
    $(".tabs a span").toArray().forEach(function (element){
        //temporary jQuery variable
        var $element = $(element);
            
        //create a click handler for this element
        $element.on("click", function (){
            var $content,
                $input,
                $button,
                i;
                
            //makes all tabs interactive
            $(".tabs a span").removeClass("active");
            //makes first tab active
            $element.addClass("active");
            //empties main content to be recreated
            $("main .content").empty();
            
            if ($element.parent().is(":nth-child(1)")){
                $content = $("<ul>");
                //reads array backwards
                for (i = toDos.length-1; i >= 0; i--){
                    $content.append($("<li>").text(toDos[i]));
                }
            }else if ($element.parent().is(":nth-child(2)")){
                $content = $("<ul>");
                toDos.forEach(function (todo){
                    $content.append($("<li>").text(todo));   
                });
            }else if ($element.parent().is(":nth-child(3)")){
               
                $input = $("<input>");
                $button = $("<button>").text("+");
                $(".content").append($input).append($button);
                $button.on("click", function(){
                    if ($input.val() !== ""){
                        toDos.push($input.val());
                        $input.val("");
                    }
                });
                
                $content = $("<div>").append($input).append($button);                
            }
            
            $("main .content").append($content);
            
            return false;
        });
    });
    
    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
    
    /*
    *Refactoring the code using a forEach loop pg. 137
    *
    $(".tabs a span").toArray().forEach(function (element)
    {
        //create a click handler for this element
        $(element).on("click", function ()
        {
            $(".tabs a span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();
            return false;
        });
    });


    /*
     *Refactoring the code using a loop pp. 136-7
     *
    var tabNumber;
    
    for (tabNumber = 1; tabNumber <= 3; tabNumber++)
    {
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(tabSelector).on("click", function()
        {
            $(".tabs span").removeClass("active");
            $(tabSelector).addClass("active");
            return false;
        });
    }

    
    /*
     *Creating functionality pg. 135
     *
    $(".tabs a:nth-child(1)").on("click", function()
        {
            $(".tabs span").removeClass("active"); // make all the tabs inactive
            $(".tabs a:nth-child(1) span").addClass("active"); //make the first tab active
            $("main .content").empty(); // empty the main content so we can recreate it
            return false; // return false so we don't follow the link
        }
    );
    
    $(".tabs a:nth-child(2)").on("click", function()
        {
            $(".tabs span").removeClass("active");
            $(".tabs a:nth-child(2) span").addClass("active");
            $("main .content").empty();
            return false;
        }
    );
    
    $(".tabs a:nth-child(3)").on("click", function()
        {
            $(".tabs span").removeClass("active");
            $(".tabs a:nth-child(2) span").addClass("active");
            $("main .content").empty();
            return false;
        }
    );

    *
    *Refactoring the code using a function pg. 136
    *
    var makeTabActive = function (tabNumber)
        {
         // construct the selector from the tabNumber
         var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
         $(".tabs span").removeClass("active");
         $(tabSelector).addClass("active");
        };
        
        $(".tabs a:nth-child(1)").on("click", function()
            {
                makeTabActive(1);
                return false;
            }
        );
        $(".tabs a:nth-child(2)").on("click", function()
            {
                makeTabActive(1);
                return false;
            }
        );
        $(".tabs a:nth-child(3)").on("click", function()
            {
                makeTabActive(1);
                return false;
            }
        );
    */