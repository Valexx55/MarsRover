var Rover = {
  direccion : "N",
  x : 0,
  y : 0,
  travelLog : []
}

function turnLeft(rover){
  if (rover.direccion == "N"){
    rover.direccion = "W";
  } else if (rover.direccion == "W"){
    rover.direccion = "S";
  } else if (rover.direccion == "S"){
    rover.direccion = "E";
  } else if(rover.direccion == "E"){
    rover.direccion  = "N";
  }
  console.log("Mars Rover tiene rumbo " + rover.direccion);
}

function turnRight(rover){
  if (rover.direccion == "N"){
    rover.direccion = "E";
  } else if (rover.direccion == "E"){
    rover.direccion = "S";
  } else if (rover.direccion == "S"){
    rover.direccion = "W";
  } else if(rover.direccion == "W"){
    rover.direccion  = "N";
  }
  console.log("Mars Rover tiene rumbo " + rover.direccion);
}

  function moveForward(rover){
    if(rover.direccion == "W"){
      rover.x -= 1;
    }else if(rover.direccion == "N"){
      rover.y -= 1;
    }else if(rover.direccion == "S"){
      rover.y += 1;
    }else if(rover.direccion == "E"){
      rover.x += 1;
    }
    console.log(" coordenadas MarsRover eje x " +rover.x + " coordenadas MarsRover eje y " +rover.y);
  }
 function moveBackward(rover){
    if(rover.direccion == "W"){
      rover.x += 1;
    }else if(rover.direccion == "N"){
      rover.y += 1;
    }else if(rover.direccion == "S"){
      rover.y -= 1;
    }else if(rover.direccion == "E"){
      rover.x -= 1;
    }
    console.log(" coordenadas MarsRover eje x " +rover.x + " eje y " +rover.y);
  }
function goForward(rover,listacomandos){
  for(i=0; i<listacomandos.length; i++){
    if(listacomandos.charAt(i)=="l"){
      turnLeft(rover);
    } else if(listacomandos.charAt(i)=="r"){
      turnRight(rover);
    } else if(listacomandos.charAt(i)=="f"){
      moveForward(rover);
      rover.travelLog.push("x = " + rover.x + "; y = " +rover.y);
    } else if(listacomandos.charAt(i)=="b"){
      moveBackward(rover);
       rover.travelLog.push("x = " + rover.x + "; y = " +rover.y);
    }
  }
  console.log(rover.travelLog);
}






console.log(Rover);
//turnLeft(Rover);
//turnLeft(Rover);
//console.log(Rover);
//turnRight(Rover);
//moveForward(Rover);
//moveBackward(Rover);
//moveForward(Rover);
//moveForward(Rover);
//moveBackward(Rover);
//moveBackward(Rover);
//moveBackward(Rover);
goForward(Rover,"fbffsbbrrlfbb");
