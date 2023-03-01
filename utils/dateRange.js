let date = new Date();
const predate = [];
const postdate = [];
export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const prearr = (x) => {
  for (let i = 0; i < 28; i++) {
    x.setDate(x.getDate() - 1);
    predate.unshift(new Date(x));
  }
};

const postarr = (x) => {
  for (let i = 0; i < 28; i++) {
    x.setDate(x.getDate() + 1);
    postdate.push(new Date(x));
  }
};

prearr(new Date());
postarr(new Date());

export const dateArrRange = predate.concat(date).concat(postdate);