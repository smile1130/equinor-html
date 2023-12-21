/**
 * QuizzEvery
 *
 * @author: Every
 * @site: https://every.is
 * @version: 1.0.0
 * 
*/

var Every = {};

(function () {

    // let paths = document.querySelectorAll('path');

    // fillSvgPaths()

    // function fillSvgPaths() {

    //     let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    //     for (var i = 0; i < paths.length; i++) {
    //         let path = paths[i];

    //         let pathLength = path.getTotalLength();

    //         path.style.strokeDasharray = pathLength;
    //         path.style.strokeDashoffset = pathLength;

    //         let drawLength = pathLength * scrollPercentage;

    //         path.style.strokeDashoffset = pathLength - drawLength;
    //     }
    // }

    window.addEventListener('load', function () {

        /**
         * ID do Quizz.
         * Este valor é o ID do projeto no Manager
         */
        Every.projectID = '626';

        /**
         * Define se o quizz fará a captação de dados e enviará ao Manager
         */
        Every.leadManager = true;

        /**
         * Configurações do Quizz
         */
        Every.quizzSettings = {
            /**
             * @type: o tipo de quiz define a forma como o resultado será entregue. Os tipos são: frequency, sum
             * Ambos os tipos utilizam o atributo 'weight' das perguntas para fazer o cálculo
             * 
             * frequency: retorna a resposta que aparecer com mais frequência.
             * sum: faz a soma dos valores de cada resposta (weight)
             */
            type: 'frequency',

            /**
             * @scramble: se definido como true o script vai embaralhar as respostas
             * Valores: true|false
             */
            scramble: false,
            timeout: 1000,
            title: `E você, como está cuidando da sua saúde e do seu coração?`,
            description: `Responda a esse quiz e entenda como cuidar melhor da sua saúde. Lembrando que o resultado do quiz não equivale a um diagnóstico, mas pode ser o start que você precisa para fazer as pazes com o seu corpo e o seu coração!`,
            info_link: '[data-name="Descubra mais sobre seu estilo:"]',
            button: 'Clique para iniciar o teste',
            repoUrl: 'https://everymundobr.github.io/uol-quizz/quizz/hcor/'
        }

        /**
         * Opções do Quizz e seus respectivos
         * pesos para a mensagem no final.
         */
        Every.quizzOptions = [
            {
                question: `<span>1.</span> Quantos cafezinhos você toma por dia?`,
                answers: [
                    {
                        text: "0, sem cafeína pra mim!",
                        weight: 1,
                    },
                    {
                        text: "Apenas 1",
                        weight: 2,
                    },
                    {
                        text: "De 2 a 3 xícaras",
                        weight: 3,
                    },
                    {
                        text: "Tomo de vez em quando",
                        weight: 4,
                    },
                ]
            },

            {
                question: `<span>2.</span> Quais itens não podem faltar no seu café da manhã?`,
                answers: [
                    {
                        text: "Frutas e iogurte",
                        weight: 1,
                    },
                    {
                        text: "Pão na chapa e café com leite",
                        weight: 2,
                    },
                    {
                        text: "Biscoito recheado e achocolatado",
                        weight: 3,
                    },
                    {
                        text: "Misto quente, café e suco de laranja",
                        weight: 4,
                    },
                ]
            },

            {
                question: `<span>3.</span> Como costumam ser as suas noites de sono?`,
                answers: [
                    {
                        text: "Durmo de 7 a 8 horas todas as noites",
                        weight: 1,
                    },
                    {
                        text: "Tenho sono agitado, levanto várias vezes durante a noite",
                        weight: 2,
                    },
                    {
                        text: "Durmo pouco e tenho sono irregular",
                        weight: 3,
                    },
                    {
                        text: "Durmo de 5 a 6 horas por noite",
                        weight: 4,
                    },
                ]
            },

            {
                question: `<span>4.</span> Qual a sua atividade física preferida?`,
                answers: [
                    {
                        text: "Caminhar todos os dias pela manhã",
                        weight: 1,
                    },
                    {
                        text: "Praticar esporte aos finais de semana",
                        weight: 2,
                    },
                    {
                        text: "Maratonar minha série favorita no sofá",
                        weight: 3,
                    },
                    {
                        text: "Praticar yoga duas vezes por semana",
                        weight: 4,
                    },
                ]
            },

            {
                question: `<span>5.</span> Como é o seu consumo de álcool por semana?`,
                answers: [
                    {
                        text: "Não bebo",
                        weight: 1,
                    },
                    {
                        text: "Aos finais de semana, em grandes quantidades",
                        weight: 2,
                    },
                    {
                        text: "Bebo com regularidade",
                        weight: 3,
                    },
                    {
                        text: "Raramente e em quantidades pequenas",
                        weight: 4,
                    },
                ]
            },

            {
                question: `<span>6.</span> Você fuma?`,
                answers: [
                    {
                        text: "Não",
                        weight: 1,
                    },
                    {
                        text: "Fumo diariamente de 1 a 3 cigarros",
                        weight: 2,
                    },
                    {
                        text: "Fumo diariamente cerca de um maço",
                        weight: 3,
                    },
                    {
                        text: "Não fumo diariamente, apenas de vez em quando",
                        weight: 4,
                    },
                ]
            },
            {
                question: `<span>7.</span> Como está o seu nível atual de estresse?`,
                answers: [
                    {
                        text: "Estou tranquilo e relaxado",
                        weight: 1,
                    },
                    {
                        text: "Me estresso pontualmente",
                        weight: 2,
                    },
                    {
                        text: "Me sinto estressado com frequência",
                        weight: 3,
                    },
                    {
                        text: "Ando bastante estressado, mas é só uma fase",
                        weight: 4,
                    },
                ]
            },
            {
                question: `<span>8.</span> Você separa um período da sua semana para atividades de lazer?`,
                answers: [
                    {
                        text: "Sempre que posso, busco fazer atividades prazerosas",
                        weight: 1,
                    },
                    {
                        text: "Não é sempre que consigo praticar atividades prazerosas",
                        weight: 2,
                    },
                    {
                        text: "Não encontro tempo para o lazer",
                        weight: 3,
                    },
                    {
                        text: "Pelo menos uma vez por semana",
                        weight: 4,
                    },
                ]
            },
            {
                question: `<span>9.</span> Com que frequência você vai ao médico?`,
                answers: [
                    {
                        text: "Vou ao médico regularmente",
                        weight: 1,
                    },
                    {
                        text: "Só vou ao médico quando me sinto mal",
                        weight: 2,
                    },
                    {
                        text: "Não lembro a última vez que estive em um consultório",
                        weight: 3,
                    },
                    {
                        text: "Faço check-up anualmente",
                        weight: 4,
                    },
                ]
            },
            {
                question: `<span>10.</span> Você costuma comer frituras e comidas gordurosas?`,
                answers: [
                    {
                        text: "Raramente",
                        weight: 1,
                    },
                    {
                        text: "Como algumas vezes por semana",
                        weight: 2,
                    },
                    {
                        text: "Quase todos os dias, amo uma fritura",
                        weight: 3,
                    },
                    {
                        text: "Só aos finais de semana",
                        weight: 4,
                    },
                ]
            },
            {
                question: `<span>11.</span> Quando você quer um lanchinho, o que você costuma comer?`,
                answers: [
                    {
                        text: "Iogurte e frutas",
                        weight: 1,
                    },
                    {
                        text: "Bolacha recheada",
                        weight: 2,
                    },
                    {
                        text: "Um salgado e refrigerante",
                        weight: 3,
                    },
                    {
                        text: "Castanhas",
                        weight: 4,
                    },
                ]
            },
            {
                question: `<span>12.</span> Você usa muito sal e açúcar no dia a dia?`,
                answers: [
                    {
                        text: "Não consumo sal e açúcar",
                        weight: 1,
                    },
                    {
                        text: "Em quase todas as refeições",
                        weight: 2,
                    },
                    {
                        text: "Uso o tempo todo, acho essencial",
                        weight: 3,
                    },
                    {
                        text: "Na maior parte do tempo, não",
                        weight: 4,
                    },
                ]
            },
            {
                question: `<span>13.</span> Você come verduras e legumes?`,
                answers: [
                    {
                        text: "Sim, sempre tenho em casa",
                        weight: 1,
                    },
                    {
                        text: "Como eventualmente, não faço questão",
                        weight: 2,
                    },
                    {
                        text: "De jeito nenhum",
                        weight: 3,
                    },
                    {
                        text: "Só fora de casa, pois não tenho o hábito de prepará-los",
                        weight: 4,
                    },
                ]
            },
            {
                question: `<span>14.</span> Sua família tem histórico de problemas cardíacos?`,
                answers: [
                    {
                        text: "Não",
                        weight: 1,
                    },
                    {
                        text: "Sim, existem alguns casos",
                        weight: 2,
                    },
                    {
                        text: "Sim, e eu mesmo já tive problemas",
                        weight: 3,
                    },
                    {
                        text: "Que eu saiba, não",
                        weight: 4,
                    },
                ]
            },

        ];
        /**
         * Cada vez que o usuário selecionar uma opção ela será
         * incrementada em resultsChoice, depois vamos pegar a opção
         * que mais apareceu e dispor os resultados.
         */
        Every.resultsChoice = [];

        Every.results = {
            1: {
                img: 'https://www.hcor.com.br/wp-content/uploads/2022/08/e1.png',
                color: '#027BBD',
                title: `Você é um exemplo de cuidado com o colesterol!`,
                text: `Muito bem! Hábitos saudáveis, prática constante de atividade física e alimentação balanceada certamente vão te ajudar a manter os níveis de colesterol normais.`
            },
            2: {
                img: 'https://www.hcor.com.br/wp-content/uploads/2022/08/e2.png',
                color: '#FF9563',
                title: `Que tal rever alguns hábitos?`,
                text: `O excesso de álcool, o hábito de fumar e a ingestão de alimentos gordurosos são prejudiciais para o seu organismo. O cigarro, por exemplo, pode oxidar o colesterol bom e transformá-lo em colesterol ruim. `
            },
            3: {
                img: 'https://www.hcor.com.br/wp-content/uploads/2022/08/e3.png',
                color: '#584A94',
                title: `É hora de algumas mudanças!`,
                text: `Está na hora de rever os seus hábitos, pois a maioria deles podem contribuir para problemas cardíacos. Que tal consultar um dos nossos especialistas e descobrir como levar uma vida mais saudável?`
            },
            4: {
                img: 'https://www.hcor.com.br/wp-content/uploads/2022/08/e4.png',
                color: '#00A6BB',
                title: `Você está no caminho certo!`,
                text: `É isso aí! O equilíbrio é fundamental para manter os níveis de colesterol normais, por isso, cuidado com os excessos.`
            },
        };

        /**
         * Em que questão o quizz começa
         * Padrão: 1
         */
        Every.quizzStartAt = 1;

        /**
         * Indexes utilizados para computar
         * no back-end.
         */
        Every.indexMap = {
            0: 'A',
            1: 'B',
            2: 'C',
            3: 'D',
            4: 'E',
            5: 'F',
            6: 'G'
        }

        /**
         * Questão atual do sistema.
         */
        Every.currentQuestion = Every.quizzStartAt;

        /**
         * Ultimo peso de escolha
         *
         * Guardamos essa função para quando o usuário voltar atrás
         * na sua decisão.
         */
        Every.lastWeight = 0;

        /**
         *  Peso total das escolhas
         */
        Every.totalWeight = 0;

        /**
         * @parse(html, replaceObjects)
         *
         * Faz o parse do HTML substituindo variáveis passadas no
         * segundo argumento.
         *
         * html: html a ser escrito
         * replaceObjects: objeto com as variáveis a serem substituídas
         *
         */
        Every.parse = function (html, replaceObjects) {
            for (var key in replaceObjects) {
                html = html.replace('{' + key + '}', replaceObjects[key]).replace('{ ' + key + ' }', replaceObjects[key]);
            }

            return html;
        }

        /**
         * @render(element, html, replaceObjects)
         *
         * Escreve o HTML em algum elemento da página.
         *
         * element: elemento onde será escrito
         * html: html a ser escrito
         */
        Every.render = function (element, html, replaceObject) {
            if (typeof replaceObjects !== 'undefined') {
                return $(element).html(Every.parse(html, replaceObjects));
            }

            return $(element).html(html);
        }

        /**
         * @renderAppend
         * 
         * Escreva com o append do $ utilizando nosso método de substituição.
         */
        Every.renderAppend = function (element, html, replaceObject) {
            if (typeof replaceObjects !== 'undefined') {
                return $(element).append(Every.parse(html, replaceObjects));
            }

            return $(element).append(html);
        }

        /**
         * @writeQuestion()
         *
         * Escreve as questões no HTML
         * de forma concisa.
         */
        Every.writeQuestion = function () {
            $('.question-holder').fadeOut("fast");
            var self = this;

            setTimeout(function () {

                var currentQuestion;
                var questions = self.quizzOptions;
                currentQuestion = questions[self.currentQuestion - 1];

                // Subtitle hidle
                $('.question-holder h3, .ev-question-button').hide();

                Every.render('.question-holder .ev-question-title', currentQuestion.question);
                Every.render('.ev-answers ul', '');

                var mountList = '';

                /**
                 * Questões em ordem aleatória
                 */
                if (self.quizzSettings.scramble) {
                    currentQuestion.answers.sort(function () { return 0.5 - Math.random() });
                }

                currentQuestion.answers.forEach(function (item, index) {
                    mountList += Every.parse(`
                        <li answer-weight="{answer_weight}" question="{question}" choiced="{choice}">
                            <span class="position-answer">{position}</span>	
                            {answer}
                        </li>
                    `, {
                        answer: item.text,
                        answer_weight: item.weight,
                        position: self.indexMap[index],
                        choice: self.indexMap[index],
                        question: self.currentQuestion
                    });
                });

                Every.render('.ev-answers ul', mountList);
                Every.bindChoice();

                // Timeout
                $('.question-holder').fadeIn(Every.quizzSettings.timeout);
                $('#embed-quiz').removeClass('start');
            }, Every.quizzSettings.timeout);
        }

        /**
         * @changeQuestion(questionNumber)
         * Troca a questão atual.
         * question: questão a ser utilizada.
         */
        Every.changeQuestion = function (questionNumber, shouldWriteQuestion) {
            var self = this;
            this.currentQuestion = questionNumber;

            if (typeof shouldWriteQuestion == 'undefined') {
                this.writeQuestion();
                setTimeout(function () {
                    $('.ev-questions-positions').html(self.writeQuestionPosition())
                }, Every.quizzSettings.timeout);
            }
        }

        /**
         * @nextQuestion(weight)
         *
         * Troca pra próxima questão (se houver),
         * caso não haja, vai pra resposta do teste.
         *
         * weight: peso da escolha
         */
        Every.nextQuestion = function (weight) {
            var nextQuestionsExists = typeof this.quizzOptions[this.currentQuestion] !== 'undefined';

            // Ultimo peso de escolha selecionado
            this.resultsChoice.push(weight);

            // Existe outra questão
            if (nextQuestionsExists) {
                return this.changeQuestion(this.currentQuestion + 1);
            }

            return this.getResult();
        }

        /**
         * @previousQuestion()
         *
         * Troca pra próxima questão (se houver),
         * caso não haja, vai pra resposta do teste.
         *
         */
        Every.previousQuestion = function () {
            var previousQuestionsExists = this.currentQuestion - 1;
            this.resultsChoice = this.resultsChoice.pop();

            // Existe outra questão
            if (previousQuestionsExists) {
                this.changeQuestion(this.currentQuestion - 1);
            }
        }

        /**
         * @bindChoice()
         *
         * Faz o bind nas listas para quando houver seleção
         * atualizar o peso atual.
         *
         */
        Every.bindChoice = function () {
            var self = this;

            $('[answer-weight]').on('click', function () {
                // var question = $(this).attr('question');
                // var characterChoiced = $(this).attr('choiced');
                var question = $('h1.ev-question-title').text();
                var characterChoiced = $(this).text();
                var weight = $(this).attr('answer-weight');

                // Envia o valor para o LeadManager
                if (Every.leadManager) {
                    lm.event(`${question}`, characterChoiced, Every.projectID);
                }
                self.nextQuestion(weight);
            });
        }


        /** 
         * @getResult()
         *
         * Retorna o peso total das escolhas.
         */
        Every.getResult = function () {
            $('.ev-answers, .questions-position').fadeOut();
            var self = this;
            var choiced = this.results[this.frequent(this.resultsChoice)];
            console.log(choiced);

            setTimeout(function () {
                var content = self.parse(`
                    <div class="ev-result">
                        <img src="{img}">
                        <h1>{title}</h1>
                        <div>{text}</div>

                        <a href="#" class="ev-question-button ev-redo">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="" d="M19.305,9.61c-0.235-0.235-0.615-0.235-0.85,0l-1.339,1.339c0.045-0.311,0.073-0.626,0.073-0.949
                                    c0-3.812-3.09-6.901-6.901-6.901c-2.213,0-4.177,1.045-5.44,2.664l0.897,0.719c1.053-1.356,2.693-2.232,4.543-2.232
                                    c3.176,0,5.751,2.574,5.751,5.751c0,0.342-0.037,0.675-0.095,1l-1.746-1.39c-0.234-0.235-0.614-0.235-0.849,0
                                    c-0.235,0.235-0.235,0.615,0,0.85l2.823,2.25c0.122,0.121,0.282,0.177,0.441,0.172c0.159,0.005,0.32-0.051,0.44-0.172l2.25-2.25
                                    C19.539,10.225,19.539,9.845,19.305,9.61z M10.288,15.752c-3.177,0-5.751-2.575-5.751-5.752c0-0.276,0.025-0.547,0.062-0.813
                                    l1.203,1.203c0.235,0.234,0.615,0.234,0.85,0c0.234-0.235,0.234-0.615,0-0.85l-2.25-2.25C4.281,7.169,4.121,7.114,3.961,7.118
                                    C3.802,7.114,3.642,7.169,3.52,7.291l-2.824,2.25c-0.234,0.235-0.234,0.615,0,0.85c0.235,0.234,0.615,0.234,0.85,0l1.957-1.559
                                    C3.435,9.212,3.386,9.6,3.386,10c0,3.812,3.09,6.901,6.902,6.901c2.083,0,3.946-0.927,5.212-2.387l-0.898-0.719
                                    C13.547,14.992,12.008,15.752,10.288,15.752z"></path>
                            </svg>
							REFAZER TESTE
						</a>
                    </div>
                `, {
                    img: choiced.img,
                    total: self.totalWeight,
                    title: choiced.title,
                    text: choiced.text,
                    message: Every.parse(choiced.text, { pontos: self.totalWeight })
                });

                $('#embed-stage').css('background-color', choiced.color);
                $('.ev-question-title, .ev-question-text').hide();
                self.render('.ev-answers', content);
                self.bindRestartButton();
                self.bindLinkButton('.ev-question-button.ev-know-more');

                if (Every.leadManager) {
                    lm.event(`Resultado: ${choiced.title}`, choiced.title, Every.projectID);
                }

                // Timeout
                $('.ev-answers').fadeIn(Every.quizzSettings.timeout);
            }, Every.quizzSettings.timeout);


        }

        /**
         * @bindRestartButton
         *
         * Ao clicar em restart, limpamos o array de respostas e o mandamos pra questão
         * número um.
         */
        Every.bindRestartButton = function () {
            var self = this;
            $('.ev-redo').on('click', function (e) {
                $('.question-holder').fadeOut("fast", function () {
                    $('#embed-stage').attr('style', '');
                    self.changeQuestion(1, true);
                    self.start(true);
                });
                return false;
            })
        }

        /**
         * @bindLinkButton
         *
         * Ao clicar manda pro saiba mais.
         */
        Every.bindLinkButton = function (identifier) {
            var self = this;
            $(identifier).on('click', function () {
                $('html,body').animate({
                    scrollTop: $(self.quizzSettings.info_link).offset().top
                }, 'slow');
            });
        }

        /**
         * @start
         *
         * Inicializa o quiz
         */
        Every.start = function (restart) {

            var self = this;
            var timing;

            // Limpamos as escolhas toda vez que inicializamos
            self.resultsChoice = [];

            if (restart) {
                timing = Every.quizzSettings.timeout;
            } else {
                timing = 0;
            }

            /**
             * Agora este é um arquivo global. Não precisa mais estar na pasta do projeto
            */
            if (Every.leadManager) {
                this.renderAppend('head', `
                    <script src="https://everymundobr.github.io/uol-quizz/quizz/events.js"></script>
                `);
            }

            /**
             * Style URL
             * <link rel="stylesheet" type="text/css" href="https://everymundobr.github.io/uol-quizz/quizz/crystal/style.css"></link>
             */

            this.renderAppend('head', `
                <link rel="stylesheet" type="text/css" href="style.css"></link>
            `);

            // Classe inicial que removeremos ao iniciar as questões
            $('#embed-quiz').addClass('start');

            function changeStyle(element) {
                var h3 = document.getElementById(element);
                h3.classList.toggle('show');
            }

            setTimeout(function () {
                self.render('#embed-quiz', `
				<div class="spotify-logo-desktop">
					<img src="https://everymundobr.github.io/uol-quizz/quizz/spotify/imagens/logo.png"/>
				</div>
					<div class="question-holder" style="display: none;">
						<h1 class="ev-question-title">${self.quizzSettings.title}</h1>
						<h3 class="ev-question-title">${self.quizzSettings.description}</h3>
						<a href="#" class="ev-question-button">Começar</a>
						<div class="ev-answers">
							<ul>
								
							</ul>
						</div>

						<div class="ev-questions-positions">
							${self.writeQuestionPosition()}
						</div>
					</div>
				`);

                $('.question-holder').fadeIn();
                $('.questions-position').hide();

                $('.ev-question-button').on('click', function (e) {

                    fillSvgPaths();
                    $('.questions-position').fadeIn();
                    Every.writeQuestion();
                    return false;
                });
            }, timing)
        }

        /**
         * @writeQuestionPosition
         *
         * Mostra em que posição da questão o usuário está.
         */
        Every.writeQuestionPosition = function () {
            var list;
            var html = '<ul class="questions-position">';

            for (i = 0; i < Every.quizzOptions.length; i++) {
                if ((i + 1) == this.currentQuestion) {
                    html = html + `<li class="active">${i + 1}</li>`;
                } else {
                    html = html + `<li>${i + 1}</li>`;
                }
            }

            html = html + '</ul>';
            return html;
        }

        /**
         * @frequent
         *
         * Retorna o item mais encontrado no array.
         */
        Every.frequent = function (array) {
            if (array.length == 0)
                return null;
            var modeMap = {};
            var maxEl = array[0], maxCount = 1;
            for (var i = 0; i < array.length; i++) {
                var el = array[i];
                if (modeMap[el] == null)
                    modeMap[el] = 1;
                else
                    modeMap[el]++;
                if (modeMap[el] > maxCount) {
                    maxEl = el;
                    maxCount = modeMap[el];
                }
            }

            return maxEl;
        }

        Every.start();
    });

})('Developed by', 'https://every.is');
