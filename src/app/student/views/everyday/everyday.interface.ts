export interface EverydayList {
  id: number | string;
  answer: string;
  english: string;
  russian: string;
  tajik: string;
}

export const everydayList: EverydayList[] = [
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
];
