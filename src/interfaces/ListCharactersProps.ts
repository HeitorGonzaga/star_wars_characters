import CharacterProps from './CharacterProps';

export default interface ListCharactersProps {
  count: number;
  next: string;
  previous: string;
  results: CharacterProps[];
}
