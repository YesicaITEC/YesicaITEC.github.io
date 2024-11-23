function gat(event){
		alert("HOLIS");
		event.preventDefault();
		var m=document.getElementById("a1").value;
		var p=document.getElementById("a2").value;
		if(m=="yesica"){
			if(p=="itec"){
				alert("BIENVENIDO");
				
				window.location.href="mm/menuc.html";
			}
			else{
				alert("contraseña incorrecta");
			}
		}
		else{
			alert("el nombre del usuario no conincide")
		}
	}