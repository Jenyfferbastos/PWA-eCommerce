//Converte de pixels para viewport

export const px2vw = (size: number, width = 1440) => `${(size / width) * 100}vw`;