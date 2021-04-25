function textExpReg(numReg){
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

    var fec = "2021/01/01";
    var temp = new Date(fec + " "+ hour.value + ":00");
    var min = new Date(fec + " "+"07:00:00");
    var max = new Date(fec + " "+"18:00:00");

    if  ((temp >= min) && (temp <= max)) {
        successInput(hour);
	} else {
		errorInput(hour, 'Debe seleccionar una hora entre: 07:00am y 06:00 pm');
	}

    if(dia.value == "0") {
        errorInput(dia, 'Debe seleccionar un dia');
	}else {
		successInput(dia);
	}
}

function isEmail(mail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
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

function cleanInput() {
        fnCleanInput(idNum);
        fnCleanInput(cel);
        fnCleanInput(area);
        fnCleanInput(ciudad);
        fnCleanInput(names);
        fnCleanInput(email);
        fnCleanInput(cargo);
        fnCleanInput(dia);
        fnCleanInput(hour);
}

function fnCleanInput(elemento){
    const formControl = elemento.parentElement;
    formControl.className = 'row clean';
}
