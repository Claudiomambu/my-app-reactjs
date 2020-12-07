import Items from './Items';
import PropTypes from 'prop-types';

const People = ({people}) =>{
    return(
        <div className="daftar">
            {people.map((person)=>(
                <Items  key={person.id} actor={person}/>
            ))}
        </div>
    )
}

People.propTypes = {
    people: PropTypes.array.isRequired
}

export default People;
