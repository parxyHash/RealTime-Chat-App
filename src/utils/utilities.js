export const collectIdsAndDocs = doc => {
  return {
    id: doc.id,
    ...doc.data()
  };
};

export const inputHelper = stated => {
  return [...stated].join("");
};

export const styleFunc = stated => {
  if (stated.length > 60) {
    return { paddingBottom: 50, paddingTop: 10 };
  } else {
    return { height: 30 };
  }
};
