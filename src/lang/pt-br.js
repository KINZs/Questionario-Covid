export default {
  appname: "Auto-Avaliacao de COVID 19",
  continuebutton: "Continuar",
  darkMode: "Apagado",
  lightMode: "Aceso",
  at:"as",
  validatedAt:"Validado",

  question: {
    q_travel: {
      type: "radio", //NAO MUDE
      title:
        "Nos últimos 14 dias, o aluno/criança ou qualquer pessoa com quem viva viajou para fora do Estado?",
      subtitle:
        "Se for isento de exigência de quarentena (por exemplo, trabalhador de serviços essenciais que viaja regularmente a trabalho), selecione «Não».",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_doctor_eval",
      },
    },

    q_doctor_eval: {
      type: "radio", //NAO MUDE
      title:
        "Um médico, prestador de serviços de saúde ou unidade de saúde pública a que o aluno/criança deveria estar em isolamento (permanecer em casa)?",
      subtitle: "Isso pode se dever a um surto ou rastreamento de contatos.",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_close_contact",
      },
    },

    q_close_contact: {
      type: "radio", //NAO MUDE
      title:
        "Nos últimos 14 dias, o aluno/criança foi identificado como contato próximo de alguém que atualmente tem COVID-19?",
      subtitle: "",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_fever",
      },
    },

    q_fever: {
      type: "radio", //NAO MUDE
      title: "O aluno/criança tem Febre e/ou calafrios",
      subtitle:
        "Temperatura de 37,8 graus Celsius/100 graus Fahrenheit, ou mais altas",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_cough",
      },
    },

    q_cough: {
      type: "radio", //NAO MUDE
      title: "O aluno/criança tem tosse ou difteria (crupe)",
      subtitle:
        "Contínuo, mais do que o habitual, com um ruído sibilante ao respirar, (não relacionado a asma, vias aéreas reativas pós-infecciosas outras causas ou problemas de saúde conhecidos preexistentes)",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_breath",
      },
    },

    q_breath: {
      type: "radio", //NAO MUDE
      title: "O aluno/criança tem dificuldade para respirar?",
      subtitle:
        "Sem fôlego, incapaz de respirar fundo, (não relacionada a asma, ou outras causas ou problemas de saúde conhecidos preexistentes)",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_taste",
      },
    },

    q_taste: {
      type: "radio", //NAO MUDE
      title: "O aluno/criança tem Diminuição ou perda do paladar ou olfato",
      subtitle:
        "Não relacionada a alergias sazonais, distúrbios neurológicos, ou outras causas ou problemas de saúde conhecidos preexistentes",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_throat",
      },
    },

    q_throat: {
      type: "radio", //NAO MUDE
      title: "O aluno/criança tem  dor de garganta ou dificuldade para engolir",
      subtitle:
        "Dor para engolir (não relacionada a alergias sazonais, refluxo ou outras causas ou problemas de saúde conhecidos preexistentes)",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_nose",
      },
    },

    q_nose: {
      type: "radio", //NAO MUDE
      title: "O aluno/criança tem corrimento nasal ou constipação",
      subtitle:
        "Não relacionado a alergias sazonais, a estar ao tempo frio, ou outras causas ou problemas de saúde conhecidos preexistentes",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_headache",
      },
    },
    q_headache: {
      type: "radio", //NAO MUDE
      title: "O aluno/criança tem dor de cabeça",
      subtitle:
        "Atípica, duradoura (não relacionada a cefaleias de tensão, enxaqueca crónica, ou outras causas ou problemas conhecidos pre-existentes)",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_vomit",
      },
    },
    q_vomit: {
      type: "radio", //NAO MUDE
      title: "O aluno/criança tem náusea, vómito e/ou diarreia",
      subtitle:
        "Não relacionados à síndrome do cólon irritável, ansiedade, cólicas menstruais, ou outras causas e problema de saúde conhecidos preexistentes",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_tiredness",
      },
    },
    q_tiredness: {
      type: "radio", //NAO MUDE
      title: "O aluno/criança tem cansaço extremo ou dores musculares",
      subtitle:
        "Atípicos, fadiga, falta de energia, alimentação deficiente em bebés (não relacionado a depressão, insónia, disfunção tireoidiana, lesão súbita, ou outras causas ou problemas de saúde conhecidos preexistentes)",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "q_relatives",
      },
    },
    q_relatives: {
      type: "radio", //NAO MUDE
      title:
        "Alguma pessoa com quem o aluno/criança vive apresenta atualmente algum sintoma novo de COVID-19 e/ou está a aguardar resultados após ter apresentado sintomas?",
      subtitle: "",
      qoptions: [
        //NAO MUDE
        { text: "Sim", value: "yes" },
        { text: "Não", value: "no" },
      ],
      next: {
        yes: "r_isolate",
        no: "screen_take_care",
      },
    },
  },

  result:{
    isolate: {
      title: "Não saia de casa / isolamento",
      icon: "times",
      result:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    safe: {
      title: "Siga a rotina / com cuidado",
      icon: "check",
      result:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  }
};
