/**
 * role = manager | associate
 */

export const EMPLOYEES = [
  {
    id: 1,
    reports_to: '',
    role: 'manager',
    name: 'manager1',
    city: 'abc',
  },
  {
    id: 2,
    reports_to: 1,
    role: 'associate',
    name: 'associate2',
    city: 'abc',
  },
  {
    id: 3,
    reports_to: 1,
    role: 'associate',
    name: 'associate3',
    city: 'def',
  },
  {
    id: 4,
    reports_to: 1,
    role: 'associate',
    name: 'associate4',
    city: 'ghi',
  },
  {
    id: 5,
    reports_to: '',
    role: 'manager',
    name: 'manager5',
    city: 'abc',
  },
  {
    id: 6,
    reports_to: '',
    role: 'manager',
    name: 'manager6',
    city: 'abc',
  },
  {
    id: 7,
    reports_to: 5,
    role: 'associate',
    name: 'associate7',
    city: 'abc',
  },
  {
    id: 8,
    reports_to: 6,
    role: 'associate',
    name: 'associate8',
    city: 'def',
  },
  {
    id: 9,
    reports_to: 6,
    role: 'associate',
    name: 'associate9',
    city: 'ghi',
  },
];
