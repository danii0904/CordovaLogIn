/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

//document.addEventListener('deviceready', onDeviceReady, false);

function check_register() {
    var nom_usuari = document.getElementById("nom_usuari").value;
    var nomReal = document.getElementById("nom").value;
    var cognomUsuari = document.getElementById("cognom").value;
    var emailUsuari = document.getElementById("email").value;
    var contraUsuario = document.getElementById("contrasenya").value;
    var confirmContra = document.getElementById("conf_contrasenya").value;

    var confirmation = pass.localeCompare(conf_contrasenya);

    if (nom_usuari.length == 0 || nomReal.length == 0 || cognomUsuari.length == 0 || emailUsuari.length == 0 ||
        contraUsuario.length == 0 || confirmContra.length == 0) {
        //someone input text its null
        alert("Alguna de les dades no es correcta");

    } else if (confirmation == "-1") {
        // pass and pass confirm its not equals
        alert("La contrasenya i la confirmació no son iguals");

    } else {
        // add user values
        /*
        users[username] = {
            "name": name,
            "lastName": lastName,
            "email": email,
            "password": pass
        };
        */
        alert("L'usuari " + nom_usuari + " s'ha registrat correctament!");

        location.href = "index.html";
    }
}


//console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
var registerButton = document.getElementById("registerButton").onclick = check_register;
