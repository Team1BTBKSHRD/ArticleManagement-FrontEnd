        $(document).ready(function() {
            /*
             *Animations Navbar Side
             */
             var b = false;
             var s = false;
            $("#menu").click(function(){
                
                var Swidth = innerWidth;
                if (Swidth > 768) 
                {
                    $('.my-navbar-side').toggleClass("toggle-side");
                    $('.my-navbar-side-background').toggleClass("toggle-side");
                    $('.content-area').toggleClass("toggle-area");
                } 
                else 
                {
                    // content area width 100%
                    if(b == false)
                    {
                        $('.my-navbar-side').addClass("my-navbar-side toggle-side");
                        $('.content-area').addClass("content-area toggle-area");
                        b=true;
                        s=true;
                    }
                    else
                    {
                        $('.my-navbar-side').removeClass("toggle-side");
                        $('.content-area').removeClass("toggle-area");
                        b=false;
                        s=true;
                    }     
                }
            });
            $(window).resize(function(){
                var Swidth = innerWidth;
                if(Swidth > 768){
                    if(s==true){
                        $('.my-navbar-side-background').addClass("toggle-side");
                        $('.my-navbar-side').addClass("toggle-side")
                        $('.content-area').addClass("toggle-area");
                        s=false;
                    } 
                }
            });

            /*
             * End Animations Navbar Side
             */
        });
    			