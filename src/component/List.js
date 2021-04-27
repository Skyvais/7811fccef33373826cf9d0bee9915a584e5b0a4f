import {Text} from './Text'
export function List (props) {
    const Listitems = props.items.map( (thing) => {

        return ( 
          //  <li>Fruit: {thing.name} Color: {thing.color}</li>
          <Text name={thing.name} color={thing.color}/> 
          
          )

    } ) 
    return (
        <div className="list">
            <ul>
            {Listitems}
            </ul>
        </div>
    )
}
export default List
