export default {
    appname: 'Auto-Avaliacao de COVID 19',
    continuebutton: "Continuar",
    darkMode:"Apagado",
    lightMode:"Aceso",
  
    questions:{
      /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_1:{
        type:"radio", //NAO MUDE
        title:"Nos últimos 14 dias, o aluno/criança ou qualquer pessoa com quem viva viajou para fora do Estado?",
        subtitle:"Se for isento de exigência de quarentena (por exemplo, trabalhador de serviços essenciais que viaja regularmente a trabalho), selecione «Não».",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ],
        next:{
            "yes":"ISOLATE",
            "no":"QUESTAO_2",
        }
      },
      /* O TEMPLATE TERMINA AQUI */
  
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_2:{
        type:"radio", //NAO MUDE
        title:"Um médico, prestador de serviços de saúde ou unidade de saúde pública a que o aluno/criança deveria estar em isolamento (permanecer em casa)?",
        subtitle:"Isso pode se dever a um surto ou rastreamento de contactos.",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_3:{
        type:"radio", //NAO MUDE
        title:"Nos últimos 14 dias, o aluno/criança foi identificado como «contacto próximo» de alguém que atualmente tem COVID-19?",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_4:{
        type:"radio", //NAO MUDE
        title:"Nos últimos 14 dias, o aluno/criança recebeu uma Notificação de Alerta de Exposição à COVID no telemóvel?",
        subtitle:"Se já fez um teste e o resultado foi negativo, seleciona “Não.”",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_5:{
        type:"radio", //NAO MUDE
        title:"O aluno/criança tem algum destes sintomas?",
        subtitle:"Escolha qualquer um/todos os que sejam novos, que estejam a piorar e que não estejam relacionados com outras causas ou problemas de saúde conhecidos preexistentes.",
       /* qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]  
       */
      },
      /* O TEMPLATE TERMINA AQUI */
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_5_A:{
        type:"radio", //NAO MUDE
        title:"Febre e/ou calafrios",
        subtitle:"Temperatura de 37,8 graus Celsius/100 graus Fahrenheit, ou mais altas",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_5_B:{
        type:"radio", //NAO MUDE
        title:"Tosse ou difteria (crupe)",
        subtitle:"Contínuo, mais do que o habitual, com um ruído sibilante ao respirar, (não relacionado a asma, vias aéreas reativas pós-infecciosas outras causas ou problemas de saúde conhecidos preexistentes)",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_5_C:{
        type:"radio", //NAO MUDE
        title:"Perda de fôlego",
        subtitle:"Sem fôlego, incapaz de respirar profundamente, (não relacionada a asma, ou outras causas ou problemas de saúde conhecidos preexistentes)",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_5_D:{
        type:"radio", //NAO MUDE
        title:"Diminuição ou perda do paladar ou olfato",
        subtitle:"Não relacionada a alergias sazonais, distúrbios neurológicos, ou outras causas ou problemas de saúde conhecidos preexistentes",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_5_E:{
        type:"radio", //NAO MUDE
        title:"Dor de garganta ou dificuldade para engolir",
        subtitle:"Dor para engolir (não relacionada a alergias sazonais, refluxo ou outras causas ou problemas de saúde conhecidos preexistentes)",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_5_F:{
        type:"radio", //NAO MUDE
        title:"Corrimento nasal ou constipação",
        subtitle:"Não relacionado a alergias sazonais, a estar ao tempo frio, ou outras causas ou problemas de saúde conhecidos preexistentes",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_5_G:{
        type:"radio", //NAO MUDE
        title:"Dor de cabeça",
        subtitle:"Atípica, duradoura (não relacionada a cefaleias de tensão, enxaqueca crónica, ou outras causas ou problemas conhecidos pre-existentes)",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_5_H:{
        type:"radio", //NAO MUDE
        title:"Náusea, vómito e/ou diarreia",
        subtitle:"Não relacionados à síndrome do cólon irritável, ansiedade, cólicas menstruais, ou outras causas e problema de saúde conhecidos preexistentes",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_5_I:{
        type:"radio", //NAO MUDE
        title:"Cansaço extremo ou dores musculares",
        subtitle:"Atípicos, fadiga, falta de energia, alimentação deficiente em bebés (não relacionado a depressão, insónia, disfunção tireoidiana, lesão súbita, ou outras causas ou problemas de saúde conhecidos preexistentes)",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
   
  /* COPIE E COLE O TEMPLATE ABAIXO PARA CRIAR NãoVAS QUESTOES */
      QUESTAO_6:{
        type:"radio", //NAO MUDE
        title:"Alguma pessoa com quem o aluno/criança vive apresenta atualmente algum sintoma novo de COVID-19 e/ou está a aguardar resultados após ter apresentado sintomas?",
        subtitle:"",
        qoptions:[ //NAO MUDE
          {text:"Sim", value:"yes"},
          {text:"Não", value:"no"},
        ]
      },
      /* O TEMPLATE TERMINA AQUI */
  
  
   }
  
  
  }
  