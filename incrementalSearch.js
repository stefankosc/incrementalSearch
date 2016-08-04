    (function() {
    var capitalCountries = [ "Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Netherlands Antilles)", "Bosnia Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of", "Cook Islands", "Costa Rica", "Croatia", "Curacao (Netherlands Antilles)", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland (Republic of)", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kosrae Island", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macau", "Macedonia (FYROM)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Ponape", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Rota", "Russia", "Rwanda", "Saba (Netherlands Antilles)", "Saipan", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain", "Sri Lanka", "St. Barthelemy", "St. Croix", "St. Eustatius (Netherlands Antilles)", "St. John", "St. Kitts and Nevis", "St. Lucia", "St. Maarten (Netherlands Antilles)", "St. Thomas", "St. Vincent and the Grenadines", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tinian", "Togo", "Tonga", "Tortola", "Trinidad and Tobago", "Truk", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Tuvalu", "US Virgin Islands", "Uganda", "Ukraine", "Union Island", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Gorda", "Wallis and Futuna", "Yap", "Yemen", "Zambia", "Zimbabwe" ]
    var countries = [];
    var i;
    var list = document.getElementById('listOfCountries');
    //changing capital letters to lower case
    for (i = 0; capitalCountries[i]; i++){
        countries[i] = capitalCountries[i].toLowerCase();
    };
    //input field
    var textField = document.getElementById('textField');
    //event listener for typed letters
    textField.addEventListener('input', function() {
        list.innerHTML = '';
        var numberOfLines = 1;
        if (textField.value.length == 0) {
            return;
        }
        //change of all typed letters to lower case
        var letter = textField.value.toLowerCase();
        var i;
        //variable used to show 'noResults' when letters do not fit to countries
        var countriesFound = false;
        //selecting countries based on letters typed by user
        for (i = 0; countries[i]; i++) {
            if (countries[i].indexOf(letter) == 0 && numberOfLines < 5){
                //how to show only 4 results?
                //I tried to store results of loop (capitalCountries[i]) in an array
                //and then assign it via innerHTML but it did not work but printed
                //divs in console
                list.innerHTML += '<div id="countriesList">' + capitalCountries[i] + '</div>';
                countriesFound = true;
                list.classList.add('border');
                numberOfLines++;
            }
        }
        if (countriesFound == false) {
            list.innerHTML = '<div id="noResults">No results</div';
        }
        //event listener for leaving the input field
        document.addEventListener('click', function dis(e) {
            //this line causes the error when I type at least two letters and delete them (error doubles)
            if (e.target.id == 'countriesList') {
                return;
            } else {
                document.getElementById('listOfCountries').style.display = 'none';
            };
            textField.addEventListener('mouseover', function (e) {
                document.getElementById('listOfCountries').style.display = 'block';
                document.removeEventListener('click', dis);
                if (e.target.value === '') {
                    list.classList.remove('border');
                }
            });
            textField.addEventListener('mouseout', function () {
                document.getElementById('listOfCountries').style.display = 'none';
                document.removeEventListener('click', dis);
            })
            document.getElementById('countriesList').addEventListener('mouseover', function (){
                document.getElementById('countriesList').classList.add('resultLightUp');

            })
        })
    });
})();
