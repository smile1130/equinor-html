var leadmanager = {};

(function () {

    /**
     * @url
     * URL do LeadManager
     */
    leadmanager.url = "https://manager.every.is/webhook";

    /**
     * @deprecated - CHECK 
     * @hash
     * Hash da empresa
     */
    leadmanager.hash = "KhET3NJtB0Vo0AF";


    /**
     * @options
     * Opções do leadmanager: Configurações default.
     */
    leadmanager.options = {
        validate: true,
        appendErrors: false,
        modalErrors: false,
        redirect: ""
    }

    /**
     * @obj
     * Objeto que será enviado pro LM.
     */
    leadmanager.obj = {}

    /**
     * Send the @obj  to LM.
     *
     * @send
     */
    leadmanager.send = function (obj, customUrl) {
        if (typeof obj !== 'undefined') {
            leadmanager.obj = obj;
        }

        if (typeof customUrl !== 'undefined') {
            leadmanager.obj.url = customUrl;
        } else {
            leadmanager.obj.url = window.location.href;
        }
        console.log(customUrl);
        console.log(leadmanager.url);

        fetch(leadmanager.url + '/broadcast/' + leadmanager.hash, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(leadmanager.obj)
        }).then(function (response) {
            response.json().then(function (data) {
                leadmanager.notify(`Lead successfully tracked.`);
                leadmanager.redirect();
            })
        });
    }

    /**
     * Show up messages in browser's console
     *
     * @notify
     */
    leadmanager.notify = function (message) {
        console.log('[LeadManager]: ' + message);
        return;
    }

    /**
     * Send events to LeadManager BigData API.
     *
     * @event
     */
    leadmanager.event = function (event, value, projectID) {
        var message = { name: event, value: value, project_id: projectID }
        console.log(message);
        fetch(leadmanager.url + '/events', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(message)
        }).then(function (response) {
            leadmanager.notify(`Event tracked.`);
        });
    }

    /**
     * Add listeners to the forms so we can get
     * the data and send to our servers too.
     *
     * @addListeners
     */
    leadmanager.addListeners = function (formObject) {
        var prefix; // . #
        var element;

        // Attach form by id
        if (formObject.identify_by == 'id') {
            prefix = '#';
            element = document.querySelector(prefix + formObject.identify_value);
        } else if (formObject.identify_by == 'class') {
            prefix = '.';
            var classNamesDots = formObject.identify_value.split(' ').join('.');
            element = document.querySelector(prefix + classNamesDots);
        } else if (formObject.identify_by == 'name') {
            element = document.querySelector('form[name="' + formObject.identify_value + '"]');
        }

        // Add the listener
        if (!element) {
            return false;
        }

        leadmanager.notify(`Form "${formObject.name}" is being readed.`);

        element.addEventListener("submit", function (e) {
            var formElements = [];
            var data;

            // Adicionamos todos os elementos ao @obj
            // que será enviado posteriormente
            for (var i = 0; i < element.elements.length; i++) {

                if (element.elements[i].type == 'password') {
                    continue;
                }

                data = {
                    name: element.elements[i].name || '',
                    value: element.elements[i].value || ''
                };

                leadmanager.obj[data.name] = data.value;
            }

            leadmanager.send();

            //e.preventDefault()
        });
    }

    /**
     * Redireciona o lead.
     *
     * @redirect
     */
    leadmanager.redirect = function (url) {
        if (this.options.redirect != '') {
            return location.href = this.options.redirect;
        }
    }

    /* leadmanager.init(); */
})('Developed by', 'https://every.is')

// Alias
if (typeof lm == 'undefined')
    var lm = leadmanager;