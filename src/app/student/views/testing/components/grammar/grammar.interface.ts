export interface GrammarList {
  id: number | string;
  questionDescription: string;
  variants: string[];
  answer?: string;
  trueAnswer: string;
}

export const grammarListExample: GrammarList[] = [
  {
    id: 1,
    questionDescription: 'I __ a doctor',
    variants: ['is', 'in', 'am', 'not'],
    trueAnswer: 'am',
  },
  {
    id: 2,
    questionDescription: 'Yesterday I __ a varzor',
    variants: ['went', 'will', 'am', 'not'],
    trueAnswer: 'was',
  },
  {
    id: 3,
    questionDescription: 'Tomorrow I __ go to varzob for have some rest',
    variants: ['is', 'will', 'am', 'not'],
    trueAnswer: 'will',
  },
  {
    id: 4,
    questionDescription: 'When __ born Isaac Nyuton',
    variants: ['is', 'was', 'am', 'not'],
    trueAnswer: 'was',
  },
  {
    id: 5,
    questionDescription: '__ you have some rest Yesterday',
    variants: ['is', 'did', 'am', 'not'],
    trueAnswer: 'did',
  },
  {
    id: 6,
    questionDescription: '__ you make black coffe',
    variants: ['is`n', 'in', 'am', 'can'],
    trueAnswer: 'can',
  },
  {
    id: 6,
    questionDescription: 'Give __ your book',
    variants: ['is', 'in', 'am', 'me'],
    trueAnswer: 'me',
  },
  {
    id: 7,
    questionDescription: 'Network connection __ fail',
    variants: ['is', 'in', 'am', 'not'],
    trueAnswer: 'is',
  },
  {
    id: 8,
    questionDescription: '__ meet tomorrow',
    variants: ['is', 'in', 'will', 'not'],
    trueAnswer: 'will',
  },
  {
    id: 9,
    questionDescription: 'how much time __ it take',
    variants: ['is', 'in', 'am', 'not'],
    trueAnswer: 'is',
  },
  {
    id: 10,
    questionDescription: 'give me __ pencil',
    variants: ['own', 'their', 'your', 'is'],
    trueAnswer: 'your',
  },
];
