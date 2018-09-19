 const alphabetical = (a, b) => {
    const dateA = a.title.rendered.substring(0, 10);
    const dateB = b.title.rendered.substring(0, 10);
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  };

  const timeStamp = (a, b) => {
    const dateA = a.date;
    const dateB = b.date;
    if (dateA < dateB) { return -1; }
    if (dateA > dateB) { return 1; }
    return 0;
  };

  export {
    alphabetical, timeStamp,
  };
