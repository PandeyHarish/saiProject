//  mobile nav
var mnav=document.getElementById('mobnav');
            var mnavo=document.getElementById('mnavo');
            var mnavc=document.getElementById('mnavc');
    
            mnav.style.marginLeft = '-110%';
    
    
            mnavc.style.display = "none";
    
            function mobNav(){
                if(mnav.style.marginLeft == '-110%'){
    
                    mnav.style.marginLeft = '0px';
                    mnav.style.transition = '0.7s';
                    mnavo.style.display = "none";
                    mnavc.style.display = "block";
    
                } else {
                    mnav.style.marginLeft = '-110%';
                    mnav.style.transition = '0.7s';
                    mnavo.style.display = "block";
                    mnavc.style.display = "none";
                }
            }