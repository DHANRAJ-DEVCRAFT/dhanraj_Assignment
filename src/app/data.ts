interface COLUMN {
  data?: number[],
  label?: string,
  backgroundColor?: string,
  borderColor?: string
}

export const chartLabels :string[]= ['2006', '2007', '2008', '2009', '2010', '2011']


export const COLUMNDATA: COLUMN[] = [//column chart data

  {
    data: [65, 59, 80, 81, 56, 55,],
    label: 'Series A',
    backgroundColor: 'rgb(7, 90, 214)', // Light blue
    borderColor: 'rgba(54, 162, 235, 1)', // Dark blue
  },
  {
    data: [5, 9, 8, 8, 6, 5],
    label: 'Series A',
    backgroundColor: 'rgb(9, 139, 9)', // Light blue
    borderColor: 'rgba(54, 162, 235, 1)', // Dark blue
  },
  {
    data: [28, 48, 40, 19, 86, 27],
    label: 'Series B',
    backgroundColor: 'rgb(241, 142, 12)', // Light pink
    borderColor: '#eb207e;', // Dark pink
  }, // Example additional series

  {
    data: [68, 48, 90, 19, 86, 40],
    label: 'Series c',
    backgroundColor: 'rgb(240, 237, 78)', // Light pink
    borderColor: '#eb207e;', // Dark pink
  }, // Example additional series

]

export const BUBBLECHART_DATA =  [//bubble chart data
  {
    data: [
      { x: 10, y: 10, r: 10 },
      { x: 15, y: 5, r: 15 },
      { x: 26, y: 12, r: 23 },
      { x: 7, y: 8, r: 8 },
    ],
    label: 'Series A',
  },
]

export const donutChart_dtaa =  [//donut chart data
  [350, 450, 100],
]
