import { TestingDocument } from '@admin/admin.interface';
import { Activities } from '@constants/enum.constants';
import { TableData } from '@components/table/table.interface';
import { CreateTestingComponent } from '@admin/components/create-testing/create-testing.component';

export const testingDocumentData: TestingDocument[] = [
  {
    _id: 1,
    avatar: '',
    label: 'Testing 001',
    description: 'Testing description 001',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is', 'am'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is', 'are'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere', 'bougth'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.', 
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.', 
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde quidem id! Vitae aliquam culpa tenetur in asperiores earum repellat unde atque amet eligendi, qui sed adipisci quia. Accusamus, voluptates.', 
        ],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor', 'brother'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003', '02.02.2002'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry', 'biology'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna', 'Alisa'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3', 'assets/001.mp3', 'assets/001.mp3',],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor', 'brother'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003', '02.02.2002'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry', 'biology'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna', 'Alisa'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 2,
    avatar: 'assets/dictionary.png',
    label: 'Testing 002',
    description: 'Testing description 002',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 3,
    avatar: 'assets/dictionary.png',
    label: 'Testing 003',
    description: 'Testing description 003',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 4,
    avatar: 'assets/dictionary.png',
    label: 'Testing 004',
    description: 'Testing description 004',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 5,
    avatar: 'assets/dictionary.png',
    label: 'Testing 004',
    description: 'Testing description 004',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 6,
    avatar: 'assets/dictionary.png',
    label: 'Testing 004',
    description: 'Testing description 004',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 6,
    avatar: 'assets/dictionary.png',
    label: 'Testing 004',
    description: 'Testing description 004',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 7,
    avatar: 'assets/dictionary.png',
    label: 'Testing 004',
    description: 'Testing description 004',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 8,
    avatar: 'assets/dictionary.png',
    label: 'Testing 004',
    description: 'Testing description 004',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 9,
    avatar: 'assets/dictionary.png',
    label: 'Testing 004',
    description: 'Testing description 004',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 10,
    avatar: 'assets/dictionary.png',
    label: 'Testing 004',
    description: 'Testing description 004',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 11,
    avatar: 'assets/dictionary.png',
    label: 'Testing 004',
    description: 'Testing description 004',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
  {
    _id: 12,
    avatar: 'assets/dictionary.png',
    label: 'Testing 004',
    description: 'Testing description 004',
    [Activities.GRAMMAR]: {
      fileName: 'grammar fileName',
      questionList: [
        {
          description: 'I __ your friend.',
          answer: 'am',
          neither: ['not', 'wet', 'is'],
        },
        {
          description: 'We __ the students of school.',
          answer: 'are',
          neither: ['not', 'aren`t', 'is'],
        },
        {
          description: 'we __ new jacket',
          answer: 'bougth',
          neither: ['feed', 'cell', 'futere'],
        },
      ],
    },
    [Activities.READING]: {
      fileName: 'reading fileName',
      readTexts: ['i am paragraph 1', 'i am paragraph 2', 'i am paragraph 3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.LISTENING]: {
      fileName: 'file name001 listening',
      audios: ['assets/001.mp3'],
      questionList: [
        {
          description: 'who was send new jacket to Ali ?.',
          answer: 'brother',
          neither: ['mother', 'father', 'neighbor'],
        },
        {
          description: 'When was bor Ali',
          answer: '02.02.2002',
          neither: ['20.01.2001', '15.12.2000', '11.12.2003'],
        },
        {
          description: 'What is the favorite subject of Ali',
          answer: 'biology',
          neither: ['computer information', 'physical', 'chemistry'],
        },
        {
          description: 'what is name mother ali',
          answer: 'Alisa',
          neither: ['Marina', 'Violite', 'Inna'],
        },
      ],
    },
    [Activities.DICTIONARY]: {
      fileName: 'Dictionary file.',
      questionList: [
        { tajik: 'Salom', russian: 'Privet', english: 'Hello' },
        { tajik: 'Baland', russian: 'Visokiy', english: 'High' },
        { tajik: 'Duxtar', russian: 'Devushka', english: 'girl' },
        { tajik: 'pisar', russian: 'malchik', english: 'boy' },
      ],
    },
    [Activities.WRITING]: {
      fileName: 'Writing File',
      themes: [
        'My favorite subject',
        'My favorite music',
        'My favorite animal',
      ],
    },
  },
];


export const testingTableData: TableData<CreateTestingComponent> = {
  id: { header: 'update', property: '_id', tooltip: 'Update current testing document' },
  columns: [
    { header: 'label', property: 'label', tooltip: 'label of current testing document' },
  ],
  avatar: { header: 'avatar', property: 'avatar', tooltip: 'Cover image of document' },
  dialogComponent: CreateTestingComponent
}