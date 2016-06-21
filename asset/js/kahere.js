(function() {

	/*var essai = document.getElementById('essai');
	var tab = (essai.className).split(" ");*/

	function disableTooltips() {
		var spans = document.getElementsByTagName('span');

		for (var i = 0; i < spans.length; i++) {
			
		}
	}

	/*// Return the tooltip of an element
	function getTooltip(element) {
		while(element = element.nextSibbling) {
			var classTab = (essai.className).split(" ");

			if(classTab[2] === 'tooltip')
				return element;
		}

		return false;
	}*/

	var check = {};

	check['name'] = function() {
		var name = document.getElementById('name'),
			tooltip = document.getElementById('nameTooltip'),
			parentClass = name.parentNode.className,
			parentClassTab = parentClass.split(" "),
			tooltipClass = tooltip.className;
			tooltipClassTab = tooltipClass.split(" ");

		if(name.value.length >= 2) {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-success';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-success';
			}
			parentClass = parentClassTab.join(' ');
			name.parentNode.className = parentClass;

			tooltipClassTab[2] = 'tooltip';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;
			
			return true;
		} else {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-error';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-error';
			}
			parentClass = parentClassTab.join(' ');
			name.parentNode.className = parentClass;

			tooltipClassTab[2] = '';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;

			return false;
		}
	};

	check['pseudo'] = function() {
		var pseudo = document.getElementById('pseudo'),
			tooltip = document.getElementById('pseudoTooltip'),
			parentClass = pseudo.parentNode.className,
			parentClassTab = parentClass.split(" "),
			tooltipClass = tooltip.className,
			tooltipClassTab = tooltipClass.split(" ");

		if(pseudo.value.length >= 4) {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-success';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-success';
			}
			parentClass = parentClassTab.join(' ');
			pseudo.parentNode.className = parentClass;

			tooltipClassTab[2] = 'tooltip';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;
			
			return true;
		} else {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-error';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-error';
			}
			parentClass = parentClassTab.join(' ');
			pseudo.parentNode.className = parentClass;

			tooltipClassTab[2] = '';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;

			return false;
		}
	};

	check['age'] = function() {
		var age = document.getElementById('age'),
			tooltip = document.getElementById('ageTooltip'),
			parentClass = age.parentNode.className,
			parentClassTab = parentClass.split(" "),
			ageValue = parseInt(age.value),
			tooltipClass = tooltip.className,
			tooltipClassTab = tooltipClass.split(" ");

		if(!isNaN(ageValue) && ageValue >= 10 && ageValue <= 100) {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-success';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-success';
			}
			parentClass = parentClassTab.join(' ');
			age.parentNode.className = parentClass;

			tooltipClassTab[2] = 'tooltip';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;
			
			return true;
		} else {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-error';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-error';
			}
			parentClass = parentClassTab.join(' ');
			age.parentNode.className = parentClass;

			tooltipClassTab[2] = '';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;

			return false;
		}
	};

	check['sex'] = function() {
		var sex = document.getElementsByName('sex'),
			tooltip = document.getElementById('sexTooltip'),
			tooltipClass = tooltip.className,
			tooltipClassTab = tooltipClass.split(" ");

		if(sex[0].checked || sex[1].checked) {
			tooltipClassTab[2] = 'tooltip';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;

			return true;
		} else {
			tooltipClassTab[2] = '';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;

			return false;
		}
	}

	check['email'] = function() {
		var email = document.getElementById('email'),
			tooltip = document.getElementById('emailTooltip'),
			parentClass = email.parentNode.className,
			parentClassTab = parentClass.split(" "),
			tooltipClass = tooltip.className,
			tooltipClassTab = tooltipClass.split(" ");

		if(email.value.length >= 4) {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-success';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-success';
			}
			parentClass = parentClassTab.join(' ');
			email.parentNode.className = parentClass;

			tooltipClassTab[2] = 'tooltip';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;
			
			return true;
		} else {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-error';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-error';
			}
			parentClass = parentClassTab.join(' ');
			email.parentNode.className = parentClass;

			tooltipClassTab[2] = '';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;

			return false;
		}
	};

	check['password'] = function() {
		var password = document.getElementById('password'),
			tooltip = document.getElementById('passwordTooltip'),
			parentClass = password.parentNode.className,
			parentClassTab = parentClass.split(" "),
			tooltipClass = tooltip.className,
			tooltipClassTab = tooltipClass.split(" ");

		if(password.value.length >= 8) {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-success';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-success';
			}
			parentClass = parentClassTab.join(' ');
			password.parentNode.className = parentClass;

			tooltipClassTab[2] = 'tooltip';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;
			
			return true;
		} else {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-error';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-error';
			}
			parentClass = parentClassTab.join(' ');
			password.parentNode.className = parentClass;

			tooltipClassTab[2] = '';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;

			return false;
		}
	};

	check['confirmPass'] = function() {
		var confirmPass = document.getElementById('confirmPass'),
			tooltip = document.getElementById('confirmPassTooltip'),
			parentClass = confirmPass.parentNode.className,
			parentClassTab = parentClass.split(" "),
			password = document.getElementById('password'),
			tooltipClass = tooltip.className,
			tooltipClassTab = tooltipClass.split(" ");

		if(confirmPass.value === password.value) {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-success';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-success';
			}
			parentClass = parentClassTab.join(' ');
			confirmPass.parentNode.className = parentClass;

			tooltipClassTab[2] = 'tooltip';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;
			
			return true;
		} else {
			if(typeof(parentClassTab[1]) === 'undefined')
				parentClassTab[1] = ' has-error';
			else {
				parentClassTab.pop();
				parentClassTab[1] = ' has-error';
			}
			parentClass = parentClassTab.join(' ');
			confirmPass.parentNode.className = parentClass;

			tooltipClassTab[2] = '';
			tooltipClass = tooltipClassTab.join(' ');
			tooltip.className = tooltipClass;

			return false;
		}
	};

	// Events
	(function() {
		var form = document.getElementById('myForm'),
			inputs = document.getElementsByTagName('input'),
			inputsLength = inputs.length;

		for(var i = 0; i < inputsLength; i++) {
			if(inputs[i].type == 'text' || inputs[i].type == 'password') {
				inputs[i].onkeyup = function() {
					check[this.id](this.id);
				};
			}
		}

		myForm.onsubmit = function() {
			var result = true;

			for(var i in check)
				result = check[i](i) && result;

			if(result) {
				var str = document.getElementById('success'),
					strClassTab = str.className.split(" ");

				strClassTab[2] = '';
				str.className = strClassTab.join(' ');
			}
		};
	})();

})();