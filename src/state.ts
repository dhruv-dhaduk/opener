import { atomWithStorage } from 'jotai/utils';

export const linksAtom = atomWithStorage<string[]>('links', []);
