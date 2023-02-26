import { gql } from '@apollo/client';

export const queryEvolution = gql`
query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
      id
      name
      evolutions{
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        evolutions{
          ...RecursivePokemonFragment
        }
        maxHP
        image
      }
    }
  }
`;