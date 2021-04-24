function textExpReg(numReg){
    console.log("textExpReg: "+ typeof(numReg) + ": "+ numReg);
    switch (numReg) {
        case 1: return '1234567890';
        case 2: return 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';
        case 3: return 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890@. ';
    }
}
function valExpReg(string, numReg){
    var out = '';
    var filtro = textExpReg(Number(numReg));

    for (var i=0; i<string.length; i++){
        if (filtro.indexOf(string.charAt(i)) != -1){
            out += string.charAt(i);
        }
    }
    return out;
}

const expReg = {
    numeric: /^\d{7,12}$/,
    celphone: /^\d{7,14}$/,
    alfab: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const   formulario = document.getElementById('form'),
        idNum = document.getElementById('num'),
        cel = document.getElementById('celular'),
        area = document.getElementById('area'),
        ciudad = document.getElementById('idCiudad'),
        names = document.getElementById('name'),
        email = document.getElementById('email'),
        cargo = document.getElementById('cargo'),
        dia = document.getElementById('idDia'),
        hour = document.getElementById('idHour');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    valInputs();
});

function valInputs() {
	const idValue = idNum.value.trim();
	const celValue = cel.value.trim();
	const areaValue = area.value.trim();
    const namesValue = names.value.trim();
	const emailValue = email.value.trim();
	const cargoValue = cargo.value.trim();
	

    if(idValue === '') {
		errorInput(idNum, 'No puede dejar el número de documento en blanco');
	}else if(!expReg.numeric.test(idValue)){
        errorInput(idNum, 'Debe ingresar un número de documento válido');
    }else {
		successInput(idNum);
	}
	
	if(celValue === '') {
		errorInput(cel, 'No puede dejar el celular en blanco');
	}else if(!expReg.celphone.test(celValue)){
        errorInput(cel, 'Debe ingresar un celular válido');
    }else {
		successInput(cel);
	}

    if(areaValue === '') {
        errorInput(area, 'No puede dejar el área en blanco');
	}else if(!expReg.alfab.test(areaValue)){
        errorInput(area, 'Debe ingresar un dato válido');
    }else {
		successInput(area);
	}

    if(ciudad.value == "0") {
        errorInput(ciudad, 'Debe seleccionar una ciudad');
	}else {
		successInput(ciudad);
	}

    if(namesValue === '') {
        errorInput(names, 'No puede dejar un campo en blanco');
	}else if(!expReg.alfab.test(namesValue)){
        errorInput(names, 'Debe ingresar un dato válido');
    }else {
		successInput(names);
	}
    
    if(emailValue === '') {
        errorInput(email, 'No puede dejar el email en blanco');
    } else if (!isEmail(emailValue)) {
        errorInput(email, 'No ingreso un email válido');
    } else {
        successInput(email);
    }

	if(cargoValue === '') {
        errorInput(cargo, 'No puede dejar un campo en blanco');
	} else if (!expReg.alfab.test(cargoValue)) {
		errorInput(cargo, 'No ingresó un email válido');
	} else {
		successInput(cargo);
	}

    var fa = new Date();
    var fcadInp = fa.getFullYear() + "/" + fa.getMonth() + "/" + fa.getDay();
    var temp = new Date(fcadInp + " " + hour.value + ":00");
    var min = new Date(fcadInp + " " + "07:00:00");
    var max = new Date(fcadInp + " " +"18:00:00");

    if  ((temp >= min) && (temp <= max)) {
        successInput(hour);
        console.log("linea 131 "+ hour.value);
	} else {
		errorInput(hour, 'Debe seleccionar una hora entre: 07:00am y 06:00 pm');
        console.log("linea 134 "+ hour);
	}

    if(dia.value == "0") {
        errorInput(dia, 'Debe seleccionar un dia');
	}else {
		successInput(dia);
	}
}

function successInput(input) {
	const formControl = input.parentElement;
	formControl.className = 'row success';
}

function errorInput(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'row error';
	small.innerText = message;
}

function isEmail(mail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
}
