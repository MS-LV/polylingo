import {TestingHistory} from '@admin/admin.interface';
import {TableData} from '@components/table/table.interface';

export const testingHistories: TestingHistory[] = [
{
  _id: 1,
  avatar: "",
  label: "Testing 001",
  description: "Testing description 001",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "hello",
        userAnswer: "unknown"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "high",
        userAnswer: "high"
      },
      {
        tajik: "uxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 2,
  avatar: "assets/favicon.png",
  label: "Testing 002",
  description: "Testing description 002",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "hello",
        userAnswer: "unknown"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "high",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite animal",
    assay: "Tajikistan 0202020202002 Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 3,
  avatar: "assets/history.png",
  label: "Testing 003",
  description: "Testing description 003",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan 063333333003 Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 4,
  avatar: "assets/student.jpg",
  label: "Testing 004",
  description: "Testing description 004",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "hello",
        userAnswer: "unknown"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "high",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan 0444444440444040Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 5,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 6,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 7,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 8,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 9,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 10,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 11,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 12,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 13,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 14,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 15,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 16,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 17,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
{
  _id: 18,
  avatar: "assets/signin.png",
  label: "Testing 005",
  description: "Testing description 005",
  grammar: {
    fileName: "grammar fileName",
    questionList: [
      {
        description: "I __ your friend.",
        answer: "am",
        neither: [
          "not",
          "am",
          "is",
          "wet"
        ],
        userAnswer: "am"
      },
      {
        description: "We __ the students of school.",
        answer: "are",
        neither: [
          "aren`t",
          "is",
          "are",
          "not"
        ],
        userAnswer: "aren`t"
      },
      {
        description: "we __ new jacket",
        answer: "bougth",
        neither: [
          "futere",
          "feed",
          "cell",
          "bougth"
        ],
        userAnswer: "feed"
      }
    ]
  },
  reading: {
    readTexts: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates."
    ],
    fileName: "reading fileName",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "neighbor",
          "brother",
          "mother",
          "father"
        ],
        userAnswer: "neighbor"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "20.01.2001",
          "15.12.2000",
          "02.02.2002",
          "11.12.2003"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "computer information",
          "physical",
          "biology",
          "chemistry"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Marina",
          "Violite"
        ],
        userAnswer: "Inna"
      }
    ]
  },
  listening: {
    audios: [
      "assets/001.mp3",
      "assets/001.mp3",
      "assets/001.mp3"
    ],
    fileName: "file name001 listening",
    questionList: [
      {
        description: "who was send new jacket to Ali ?.",
        answer: "brother",
        neither: [
          "mother",
          "father",
          "brother",
          "neighbor"
        ],
        userAnswer: "mother"
      },
      {
        description: "When was bor Ali",
        answer: "02.02.2002",
        neither: [
          "15.12.2000",
          "11.12.2003",
          "02.02.2002",
          "20.01.2001"
        ],
        userAnswer: "02.02.2002"
      },
      {
        description: "What is the favorite subject of Ali",
        answer: "biology",
        neither: [
          "physical",
          "computer information",
          "chemistry",
          "biology"
        ],
        userAnswer: "physical"
      },
      {
        description: "what is name mother ali",
        answer: "Alisa",
        neither: [
          "Inna",
          "Alisa",
          "Violite",
          "Marina"
        ],
        userAnswer: "Marina"
      }
    ]
  },
  dictionary: {
    fileName: "Dictionary file.",
    questionList: [
      {
        tajik: "Salom",
        russian: "Privet",
        english: "Hello",
        userAnswer: "hello"
      },
      {
        tajik: "Baland",
        russian: "Visokiy",
        english: "High",
        userAnswer: "high"
      },
      {
        tajik: "Duxtar",
        russian: "Devushka",
        english: "girl",
        userAnswer: "girl"
      },
      {
        tajik: "pisar",
        russian: "malchik",
        english: "boy",
        userAnswer: "boy"
      }
    ]
  },
  writing: {
    fileName: "Writing File",
    themes: [
      "My favorite subject",
      "My favorite music",
      "My favorite animal"
    ],
    theme: "My favorite subject",
    assay: "Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikistan Tajikist"
  },
},
];


export const historyTableData: TableData = {
  id: { header: 'update', property: '_id', tooltip: 'See in detail' },
  columns: [
    { header: 'Label', property: 'label', tooltip: 'label of document' },
  ],
  avatar: { header: 'avatar', property: 'avatar', tooltip: 'Avatar image of document' },
}


