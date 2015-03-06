function validate_cpf(element,finalize) {

	var value = null;
	
	value = element.value;
	value = value.replace(/[^0123456789]/g,'');
	
	if (finalize && value.length < 11) {
		value = value + Array(12 - value.length).join('0');
	}
	value = value.substring(0,3) + '.' + value.substring(3,6) + '.' + value.substring(6,9) + '-' + value.substring(9,11);
	
	element.value = value;
	
}

function validate_cnpj(element,finalize) {

	var value = null;
	
	value = element.value;
	value = value.replace(/[^0123456789]/g,'');
	
	if (finalize && value.length < 14) {
		value = value + Array(15 - value.length).join('0');
	}
	value = value.substring(0,2) + '.' + value.substring(2,5) + '.' + value.substring(5,8) + '/' + value.substring(8,12) + '-' + value.substring(12,14);
	
	element.value = value;
	
}

function validate_cep(element,finalize) {
	
	var value = null;
	
	value = element.value;
	value = value.replace(/[^0123456789]/g,'');
	
	if (finalize && value.length < 8) {
		value = value + Array(9 - value.length).join('0');
	}
	value = value.substring(0,5) + '-' + value.substring(5,8 );
	
	element.value = value;	

}