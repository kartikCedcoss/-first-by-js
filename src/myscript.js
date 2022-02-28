function conversion(){
    input =document.getElementById('input1').value;
    fd=document.getElementById('unit1').value;
    sd=document.getElementById('unit2').value;
    
    if(fd=='km' && sd=='m'){
        a= parseFloat(input);
        
        document.getElementById("input2").value = parseFloat(a*1000) ;
        }

    else if(fd=='km' && sd == 'cm'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a*100000) ;
    }
    else if(fd=='km' && sd == 'mm'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a*1000000) ;
    }
    else if(fd=='m' && sd == 'km'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a/1000) ;
    }
    else if(fd=='m' && sd == 'cm'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a*100) ;
    }
    else if(fd=='m' && sd == 'mm'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a*1000) ;
    }
    else if(fd=='cm' && sd == 'km'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a/100000) ;
    }
    else if(fd=='cm' && sd == 'm'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a/100) ;
    }
    else if(fd=='cm' && sd == 'mm'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a*10) ;
    }
    else if(fd=='mm' && sd == 'km'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a/1000000) ;
    }
    else if(fd=='mm' && sd == 'm'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a/1000) ;
    }
    else if(fd=='mm' && sd == 'cm'){
        a= parseFloat(input);
        document.getElementById("input2").value = parseFloat(a/10) ;
    }

    else {
        document.getElementById("input2").value = "Please select the different units" ;
    }

     
    
}