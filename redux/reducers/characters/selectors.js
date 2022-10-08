const getCharactersSlice = (state) => state.characters;

export const getPage = (state) => getCharactersSlice(state).page;
export const getOffset = (state) => getCharactersSlice(state).offset;
export const getCharacter = (state) => getCharactersSlice(state).character;
