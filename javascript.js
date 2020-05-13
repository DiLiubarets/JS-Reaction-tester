init();

function init() {
    document.addEventListener('readystatechange', function () {
        if (document.readyState === "complete") {
            userInterface();
        }
    })
}

function userInterface() {
    var start = new Date().getTime();
            
            function getRandomColor() {
                
                var letters = '0123456789ABCDEF'.split('');
    
                var color = '#';
    
                for (var i = 0; i < 6; i++ ) {
        
                    color += letters[Math.floor(Math.random() * 16)];
    
                }
    
                return color;

            }
            
            function makeShapeAppear() {
                
                var shape = document.getElementById("shape");

                var top = Math.random() * 400;
                
                var left = Math.random() * 400;
                
                var width = (Math.random() * 200) + 100;
                
                if (Math.random() > 0.5) {
                    
                    shape.style.borderRadius = "50%";
                    
                } else {
                    
                    shape.style.borderRadius = "0";
                    
                }
                
                shape.style.backgroundColor = getRandomColor();
                
                shape.style.width = width + "px";
                
                shape.style.height = width + "px";
                
                shape.style.top = top + "px";
                
                shape.style.left = left + "px";
    
                shape.style.display = "block";
                
                start = new Date().getTime();

            }
            
            function appearAfterDelay() {
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
                
            }
            
            makeShapeAppear();
            
            shape.onclick = function() {
                
                shape.style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start) / 1000;
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAfterDelay();
                
            }
        
}