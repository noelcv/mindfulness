export const currentDate = new Date().toISOString().substring(0,15);

export const sortEvents = (arr) => arr.sort((a,b) => new Date(a.date) - new Date(b.date));