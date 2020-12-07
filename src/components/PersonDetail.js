import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


class PersonDetail extends React.Component{
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
    render(){
        const{
            profile_path,
            name,
            birthday,place_of_birth,known_for_department,
            biography
        }=this.props.actorDetail;
return(
            <Container>
                <div className="text-center mt-4" >
                <Image src ={`https://image.tmdb.org/t/p/original/${profile_path}`} style={{width : '150px'}}/>
                <h3>{name}</h3>
                <p>{birthday}</p><p>{place_of_birth}</p>
                <p>{known_for_department}</p>
                </div>

                <p>{biography}</p>
            </Container>
            
        )

    }
}

export default PersonDetail;