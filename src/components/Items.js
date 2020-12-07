import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image  from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Items = ({actor:{name, profile_path, id}})=>{
    return(
        <Card body className="text-center"  >
            <Image src= {`https://image.tmdb.org/t/p/original/${profile_path}`} className="gambar" roundedCircle/>
            <h3>{name}</h3>
            <Link to ={`/personDetail/${id}`}>
            <Button variant = "success">Details</Button> 
            </Link>
        </Card>
    )
}
Items.propTypes={
    actor: PropTypes.object.isRequired
}

export default Items;