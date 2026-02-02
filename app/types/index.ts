
export type travelersStoriesType = {
    mainImg: string,
    country: string,
    heading: string,
    about: string,
    avatar: string,
    name: string,
    data: string,

}


export type travelersType = {
    about: string,
    avatar: string,
    name: string,
}


export type storiesType = {
    _id: string,
    article: string,
    category: string,
    date: string,
    favoriteCount: number,
    img: string,
    ownerId: string,
    title: string

}


export type StoriesPagination = {
  data: storiesType[]
  hasNextPage: boolean
  hasPreviousPage: boolean
  page: number
  perPage: number
  totalItems: number
  totalPages: number
}

export type StoriesResponseData = {
  stories: StoriesPagination
}


export type StoriesResponse = {
  status: number
  message: string
  data: StoriesResponseData
}



    export const categories: Record<string, string> = {
        '68fb50c80ae91338641121f0': 'Азія',
        '68fb50c80ae91338641121f1': 'Гори',
        '68fb50c80ae91338641121f2': 'Європа',
        '68fb50c80ae91338641121f3': 'Америка',
        '68fb50c80ae91338641121f4': 'Африка',
        '68fb50c80ae91338641121f6': 'Пустелі',
        '68fb50c80ae91338641121f7': 'Балкани',
        '68fb50c80ae91338641121f8': 'Кавказ',
        '68fb50c80ae91338641121f9': 'Океанія',
    }





